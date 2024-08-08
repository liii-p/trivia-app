import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import GameOver from "../../src/components/GameOver/GameOver";
const points = 3;

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
// describe("Play again", () => {
//   it("should reload the app", () => {
//     const wrapper = render(<GameOver points={points} />);
//   });
// });
