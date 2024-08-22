package com.aivirt.triviaapi.exception;

public class AnswersNotFoundException extends Exception {
    private int answers_id;
    public AnswersNotFoundException(int answers_id) {
        super("Answers not found with id " + answers_id);
    }
}
