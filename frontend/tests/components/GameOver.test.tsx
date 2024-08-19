import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect, describe, beforeEach, vi } from "vitest";
import GameOver from "../../src/components/GameOver/GameOver";
const points = 3;

const originalWindowLocation = window.location;

beforeEach(() => {
  window.location = originalWindowLocation;
});

/*
Given the game is over
When the GameOver component is triggered
Then the GameOver component renders properly
*/
describe("<GameOver />", () => {
  it("should render GameOver properly", () => {
    render(<GameOver points={points} />);

    const gameover = screen.findByText("Game Over!");
    expect(gameover).toBeTruthy();

    const finalPoints = screen.findByText(`You got ${points} out of 10!`);
    expect(finalPoints).toBeTruthy();

    const button = screen.findByRole("button");
    expect(button).toBeTruthy();
  });
});

/*
Given the user is on the GameOver screen
When the user clicks the play again button
Then the app should reload
*/
describe("Play again", () => {
  vi.spyOn(window.location, "reload");
  it("should reload the app when Play Again is clicked", () => {
    render(<GameOver points={points} />);

    fireEvent.click(screen.getByText("Play Again"));

    expect(window.location.reload).toHaveBeenCalled();
  });
});
