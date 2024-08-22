package com.aivirt.triviaapi.service.impl;

import com.aivirt.triviaapi.model.Question;
import com.aivirt.triviaapi.repository.QuestionRepo;
import com.aivirt.triviaapi.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService {
    private QuestionRepo questionRepo;

    public QuestionServiceImpl(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    @Override
    public Question getQuestionById(int questionId) {
        Optional<Question> optionalQuestion = questionRepo.findById(questionId);
        return optionalQuestion.orElse(null);
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepo.findAll();
    }

    @Override
    public String createQuestion(Question question) {
        questionRepo.save(question);
        return "Successfully created new question";
    }

    @Override
    public String updateQuestion(Question question) {
        questionRepo.save(question);
        return "Successfully updated question";
    }

}
