import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Menu from "../../src/components/Menu/Menu";

/*
Given the App isn't already loaded
When the page is loaded by the user
Then the menu appears on the page
*/
describe("<Menu />", () => {
  it("should render Menu properly", () => {
    render(
      <Menu
        setInvisible={vi.fn()}
        difficultyFunc={vi.fn()}
        selectDifficulty={"easy"}
      />
    );

    const button = screen.findByRole("button");
    expect(button).toBeTruthy();
  });
});
