package com.aivirt.triviaapi.controller;

import com.aivirt.triviaapi.exception.AnswersNotFoundException;
import com.aivirt.triviaapi.model.Answers;
import com.aivirt.triviaapi.repository.AnswersRepo;
import com.aivirt.triviaapi.service.AnswersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswersController {
    @Autowired
    AnswersRepo answersRepo;

    @GetMapping("/answers")
    public List<Answers> getAllAnswers() {
        return answersRepo.findAll();
    }

    @GetMapping("/answers/{id}")
    public Answers getAnswersById(@PathVariable int id) throws AnswersNotFoundException {
        return answersRepo.findById(id)
                .orElseThrow(() -> new AnswersNotFoundException(id));
    }

    @PostMapping("/answers")
    public Answers createAnswers(@RequestBody Answers answers) {
        return answersRepo.save(answers);
    }

    @PutMapping("/answers/{id}")
    public Answers updateAnswers(@PathVariable int id, @RequestBody Answers answersDetails) throws AnswersNotFoundException {
        Answers answers = answersRepo.findById(id)
                .orElseThrow(() -> new AnswersNotFoundException(id));
        answers.setCorrect_answer(answersDetails.getCorrect_answer());
        answers.setIncorrect_answer1(answersDetails.getIncorrect_answer1());
        answers.setIncorrect_answer2(answersDetails.getIncorrect_answer2());
        answers.setIncorrect_answer3(answersDetails.getIncorrect_answer3());

        return answersRepo.save(answers);
    }

    @DeleteMapping("/answers/{id}")
    public ResponseEntity<?> deleteAnswersById(@PathVariable int id) throws AnswersNotFoundException {
        Answers answers = answersRepo.findById(id)
                .orElseThrow(() -> new AnswersNotFoundException(id));

        answersRepo.delete(answers);

        return ResponseEntity.ok().build();
    }
}
