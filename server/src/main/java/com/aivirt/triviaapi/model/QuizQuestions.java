package com.aivirt.triviaapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_questions")
public class QuizQuestions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quizId;
    private int questionId;
    private int answerId;
}
