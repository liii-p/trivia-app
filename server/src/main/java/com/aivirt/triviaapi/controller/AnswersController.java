package com.aivirt.triviaapi.controller;

import com.aivirt.triviaapi.exception.AnswersNotFoundException;
import com.aivirt.triviaapi.model.Answers;
import com.aivirt.triviaapi.service.AnswersService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswersController {

    AnswersService answersService;

    public AnswersController(AnswersService answersService) {
        this.answersService = answersService;
    }

    @GetMapping()
    public List<Answers> getAllAnswers() {
        return answersService.getAllAnswers();
    }

    @GetMapping("/answers/{id}")
    public Answers getAnswersById(@PathVariable int id) throws AnswersNotFoundException {
        return answersService.getAnswersById(id);
    }

    @PostMapping("/answers")
    public String createAnswers(@RequestBody Answers answers) {
        return answersService.createAnswers(answers);
    }

    @PutMapping("/answers/{id}")
    public String updateAnswers(@PathVariable int id, @RequestBody Answers answersDetails) throws AnswersNotFoundException {
        return answersService.updateAnswers(answersDetails);
    }

}
