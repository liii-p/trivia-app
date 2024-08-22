package com.aivirt.triviaapi.controller;

import com.aivirt.triviaapi.exception.QuestionNotFoundException;
import com.aivirt.triviaapi.model.Question;
import com.aivirt.triviaapi.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // Read all questions available in DB
    @GetMapping()
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    // Read specific question
    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable(value = "id") int id) throws QuestionNotFoundException {
        return questionService.getQuestionById(id);
    }

    @PostMapping
    public String createQuestion(@RequestBody Question question) {
        return questionService.createQuestion(question);
    }

    @PutMapping("/{id}")
    public String updateQuestion(@PathVariable(value = "id") int id, @RequestBody Question questionDetails) throws QuestionNotFoundException {
        return questionService.updateQuestion(questionDetails);
    }

}
