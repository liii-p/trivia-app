package com.aivirt.triviaapi.controller;

import com.aivirt.triviaapi.exception.QuestionNotFoundException;
import com.aivirt.triviaapi.model.Question;
import com.aivirt.triviaapi.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepo questionRepo;

    @GetMapping("/question")
    public List<Question> getAllQuestions() {
        return questionRepo.findAll();
    }

    @GetMapping("/question/{id}")
    public Question getQuestionById(@PathVariable(value = "id") int id) throws QuestionNotFoundException {
        return questionRepo.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));
    }

    @PostMapping("/question")
    public Question addQuestion(@RequestBody Question question) {
        return questionRepo.save(question);
    }

    @PutMapping("/question/{id}")
    public Question updateQuestion(@PathVariable(value = "id") int id, @RequestBody Question questionDetails) throws QuestionNotFoundException {
        Question question = questionRepo.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));

        question.setQuestion_title(questionDetails.getQuestion_title());
        question.setDifficulty(questionDetails.getDifficulty());

        return questionRepo.save(question);
    }

    @DeleteMapping("/question/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable(value = "id") int id) throws QuestionNotFoundException {
        Question question = questionRepo.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));

        questionRepo.delete(question);
        return ResponseEntity.ok().build();
    }
}
