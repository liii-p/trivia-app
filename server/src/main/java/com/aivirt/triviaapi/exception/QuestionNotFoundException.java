package com.aivirt.triviaapi.exception;

public class QuestionNotFoundException extends Exception {
    private int question_id;
    public QuestionNotFoundException(int question_id) {
        super("Question not found with id: " + question_id);
    }
}
