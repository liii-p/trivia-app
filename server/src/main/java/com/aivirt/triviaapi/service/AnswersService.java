package com.aivirt.triviaapi.service;

import com.aivirt.triviaapi.model.Answers;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AnswersService {

    String createAnswers(Answers answers);

    Answers getAnswersById(int id);

    List<Answers> getAllAnswers();

    String updateAnswers(Answers answers);


}
