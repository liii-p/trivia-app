package com.aivirt.triviaapi.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name="quizzes")
public class Quiz {
    @Id
    @GeneratedValue
    private int id;

    @Column
    private Instant created_at;

    @Column
    private Instant updated_at;

    @Column
    private int score;
}
