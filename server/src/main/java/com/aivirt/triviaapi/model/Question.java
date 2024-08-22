package com.aivirt.triviaapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue
    private int id;
    private String difficulty;
    private String question_title;

    public Question() {}

    public Question(int id, String difficulty, String question_title) {
        this.id = id;
        this.difficulty = difficulty;
        this.question_title = question_title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getQuestion_title() {
        return question_title;
    }

    public void setQuestion_title(String question_title) {
        this.question_title = question_title;
    }
}
