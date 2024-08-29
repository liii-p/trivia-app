package com.aivirt.triviaapi.repository;

import com.aivirt.triviaapi.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<Quiz, Integer> {
}
