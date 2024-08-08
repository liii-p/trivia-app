import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Menu from "../../src/components/Menu/Menu";
import { useState } from "react";

/*
Given
When
Then
*/
describe.skip("<Menu />", () => {
  it("should render Menu properly", () => {
    const [notActive, setNotActive] = useState<boolean>(true);
    const [selectDifficulty, setSelectDifficulty] = useState<string>("easy");

    const difficultySelection = (difficulty: string) => {
      setSelectDifficulty(difficulty);
    };

    const handleClick = () => {
      console.log("Handling click.");
      setNotActive(false);
      console.log(notActive);
    };
    render(
      <Menu
        setInvisible={handleClick}
        difficultyFunc={difficultySelection}
        selectDifficulty={selectDifficulty}
      />
    );

    const button = screen.findByRole("button");
    expect(button).toBeTruthy();
  });
});
