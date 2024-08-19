import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "../../src/components/Dropdown/Dropdown";
import { DropdownProps } from "../../src/types";

describe("<Dropdown />", () => {
  const mockDifficultySelection = vi.fn();

  const setup = (props: Partial<DropdownProps> = {}) => {
    const defaultProps: DropdownProps = {
      difficultySelection: mockDifficultySelection,
      ...props,
    };
    return render(<Dropdown {...defaultProps} />);
  };

  it("should render Dropdown properly", () => {
    expect(setup()).toBeTruthy();
  });

  /*
  Given the user has clicked on the dropdown
  When the user is viewing the dropdown
  Then the difficulty options should be visible
  */
  it("should display the difficulty options", () => {
    setup();
    const options = ["easy", "medium", "hard"];
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  /*
  Given the user has clicked on the dropdown
  When the user clicks on an option
  Then the difficulty options should be selected
  */
  it("should call difficultySelection with the correct argument when an option is clicked", () => {
    setup();
    fireEvent.click(screen.getByText("easy"));
    expect(mockDifficultySelection).toHaveBeenCalledWith("easy");
  });
});
