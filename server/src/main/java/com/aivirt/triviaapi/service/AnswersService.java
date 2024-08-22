package com.aivirt.triviaapi.service;

import com.aivirt.triviaapi.model.Answers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AnswersService {

    Answers createAnswers(Answers answers);

    Answers getAnswersById(int id);

    List<Answers> getAllAnswers();

    Answers updateAnswers(Answers answers);

    void deleteAnswers(int id);

}
