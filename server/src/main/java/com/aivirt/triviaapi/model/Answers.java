package com.aivirt.triviaapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "answers")
public class Answers {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name="id")
    private Question questionId;
    private String answer;
    private boolean is_correct;

    public Answers() {}

    public Answers(int id, Question questionId, String answer, boolean is_correct) {
        this.id = id;
        this.questionId = questionId;
        this.answer = answer;
        this.is_correct = is_correct;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
