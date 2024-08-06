import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  it("should render App component properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("Trivia App");
  });
});
