# Trivia API
## MVP
- When the user completes a quiz it gets submitted to the API that keeps track of all game details:
  - score 
  - date played
  - questions answered
  - submitted answer for each question
  - correct answer for each question
  - if a question was failed or not
- One of the API endpoints should allow filtering questions by failed
- On the frontend, the user should be able to view questions that they answered wrong
- They should be able to attempt those questions again
- If they answer the question correct, it should get archived in the database

## Changelog
- 22/08/2024: Added controllers, services and models for Question and Answers

## To-Do:
- [] Add Quiz entity (joined table for question + answers)