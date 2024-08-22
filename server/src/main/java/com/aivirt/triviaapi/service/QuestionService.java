package com.aivirt.triviaapi.service;

import com.aivirt.triviaapi.model.Answers;
import com.aivirt.triviaapi.model.Question;
import org.springframework.stereotype.Service;

import java.util.List;

public interface QuestionService {
    Question getQuestionById(int questionId);

    List<Question> getAllQuestions();

    String createQuestion(Question question);

    String updateQuestion(Question question);

}
