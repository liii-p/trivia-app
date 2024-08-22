package com.aivirt.triviaapi.service;

import com.aivirt.triviaapi.model.Answers;
import com.aivirt.triviaapi.model.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {
    Question getQuestionById(String questionId);

    List<Question> getAllQuestions();

    Question createQuestion(Question question);

    Question updateQuestion(Question question);

    void deleteQuestion(String questionId);
}
