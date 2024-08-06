import { it, expect, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import QuestionCard from "../../src/components/QuestionCard/QuestionCard";

describe("QuestionCard", () => {
  it("should render QuestionCard with the associated question, when selectDifficulty is provided", async () => {
    render(<QuestionCard selectDifficulty="easy" />);

    const quHeading = screen.findByTestId("questionTitleTest");
    await waitFor(() => expect(quHeading).toBeTruthy());
  });
});
