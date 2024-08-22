package com.aivirt.triviaapi.repository;
import com.aivirt.triviaapi.model.Answers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswersRepo extends JpaRepository<Answers, Integer> {
}
