import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import Dropdown from "../../src/components/Dropdown/Dropdown";
import { useEffect, useState } from "react";

describe.skip("<Dropdown />", () => {
  it("should render Dropdown properly", () => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectDifficulty, setSelectDifficulty] = useState<string>("easy");

    const difficultySelection = (difficulty: string) => {
      setSelectDifficulty(difficulty);
    };

    const onClickHandler = (difficulty: string): void => {
      difficultySelection(difficulty);
    };

    useEffect(() => {
      setShowDropDown(showDropDown);
    }, [showDropDown]);

    const wrapper = render(
      <Dropdown difficultySelection={difficultySelection} />
    );

    expect(wrapper).toBeTruthy();
  });
});
