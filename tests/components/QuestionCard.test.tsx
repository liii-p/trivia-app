import { it, expect, describe, vi, beforeEach } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import QuestionCard from "../../src/components/QuestionCard/QuestionCard";
import * as useQuestionsHook from "../../src/hooks/useQuestions/useQuestions";

const mockQuestions = [
  {
    question: "Question 1?",
    correct_answer: "Answer 1",
    incorrect_answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    question: "Question 2?",
    correct_answer: "Answer 2",
    incorrect_answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
];

describe("QuestionCard", () => {
  const useQuestionsSpy = vi.spyOn(useQuestionsHook, "default");

  beforeEach(() => {
    cleanup();
  });
  /*
  Given the user has selected a difficulty
  When the QuestionCard is called
  Then it should render properly
  */
  it("should render QuestionCard with the associated question and buttons", async () => {
    render(<QuestionCard selectDifficulty="easy" />);

    // make sure the question title exists
    const quHeading = screen.findByTestId("questionTitleTest");
    await waitFor(() => expect(quHeading).toBeTruthy());
    // make sure the buttons exist
    const button = screen.findByTestId("questionButtonTest");
    await waitFor(() => expect(button).toBeTruthy());
  });

  /*
  Given the user has selected a difficulty
  When the QuestionCard is called and the question hasn't loaded yet
  Then it should display loading text
  */
  it("should render loading text", async () => {
    render(<QuestionCard selectDifficulty="easy" />);

    const loading = screen.findByRole("paragraph");
    expect(loading).toBeTruthy();
  });

  /*
  Given the user is viewing a question
  When the user selects the correct answer
  Then it should display the next question
  */
  it("should display the next question when the correct answer is clicked", async () => {
    const mockResponse = {
      ok: true,
      statusText: "OK",
      json: async () => mockQuestions,
    } as Response;

    useQuestionsSpy
      .mockResolvedValueOnce({
        results: mockQuestions[0],
      })
      .mockResolvedValueOnce({
        results: mockQuestions[1],
      });

    //expect(await useQuestionsSpy).toEqual(mockQuestions);

    const { getByTestId } = render(<QuestionCard selectDifficulty="easy" />);

    await waitFor(
      () =>
        expect(getByTestId("questionButtonTest").children.length).toBe(
          mockQuestions.length
        ),
      {
        timeout: 5000,
        interval: 100,
      }
    );

    await screen.findByText("Question 1");

    // Click the correct answer
    fireEvent.click(screen.getByText("Answer 1"));

    // Wait for the next question to be displayed
    // await waitFor(() =>
    //   expect(screen.getByTestId("questionTitleTest").innerHTML).toBe(
    //     "Question 2?"
    //   )
    // );

    await screen.findByText("Question 2?");
  });
});
