import { it, expect, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import QuestionCard from "../../src/components/QuestionCard/QuestionCard";

describe("QuestionCard", () => {
  it("should render QuestionCard with the associated question and buttons, when selectDifficulty is provided", async () => {
    render(<QuestionCard selectDifficulty="easy" />);

    // make sure the question title exists
    const quHeading = screen.findByTestId("questionTitleTest");
    await waitFor(() => expect(quHeading).toBeTruthy());
    // make sure the buttons exist
    const button = screen.findByTestId("questionButtonTest");
    await waitFor(() => expect(button).toBeTruthy());
  });

  it("should render loading text", async () => {
    render(<QuestionCard selectDifficulty="easy" />);

    const loading = screen.findByRole("paragraph");
    expect(loading).toBeTruthy();
  });
});
