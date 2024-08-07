import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import GameOver from "../../src/components/GameOver/GameOver";

/*
Given the game is over
When the GameOver component is triggered
Then the GameOver component renders properly
*/
describe("<GameOver />", () => {
  it("should render GameOver properly", () => {
    const points = 3;
    render(<GameOver points={points} />);

    const gameover = screen.findByText("Game Over!");
    expect(gameover).toBeTruthy();

    const finalPoints = screen.findByText(`You got ${points} out of 10!`);
    expect(finalPoints).toBeTruthy();

    const button = screen.findByRole("button");
    expect(button).toBeTruthy();
  });
});
