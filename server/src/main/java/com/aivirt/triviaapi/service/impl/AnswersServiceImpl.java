package com.aivirt.triviaapi.service.impl;

import com.aivirt.triviaapi.model.Answers;
import com.aivirt.triviaapi.repository.AnswersRepo;
import com.aivirt.triviaapi.service.AnswersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswersServiceImpl implements AnswersService {
    private AnswersRepo answersRepo;

    public AnswersServiceImpl(AnswersRepo answersRepo)  {
        this.answersRepo = answersRepo;
    }

    @Override
    public Answers getAnswersById(int answerId) {
        Optional<Answers> optionalAnswers = answersRepo.findById(answerId);
        return optionalAnswers.orElse(null);
    }

    @Override
    public List<Answers> getAllAnswers() {
        return answersRepo.findAll();
    }

    @Override
    public String createAnswers(Answers answer) {
        answersRepo.save(answer);
        return "Successfully created new answer";
    }

    @Override
    public String updateAnswers(Answers answer) {
        answersRepo.save(answer);
        return "Successfully updated answer";
    }
}
