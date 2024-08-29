package com.aivirt.triviaapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "question_title")
    private String questionTitle;

    @Column(name = "category")
    private String category;

    public Question() {}

    public Question(int id, String difficulty, String category, String questionTitle) {
        this.id = id;
        this.difficulty = difficulty;
        this.category = category;
        this.questionTitle = questionTitle;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getQuestionTitle() {
        return questionTitle;
    }

    public void setQuestionTitle(String question_title) {
        this.questionTitle = questionTitle;
    }
}
