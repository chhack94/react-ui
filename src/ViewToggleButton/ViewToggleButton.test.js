import { render, screen } from "@testing-library/react";

import React from "react";
import ViewToggleButton from ".";
import userEvent from "@testing-library/user-event";

/**
 * Test wrapper for ViewToggleButton
 *
 * Provides state for value to avoid errors changing from uncontrolled to controlled.
 */
const ViewToggleButtonWithState = ({
  onChange,
  value: valueIn = "",
  ...rest
}) => {
  const [view, setView] = React.useState(valueIn);
  const handleChange = (event, value) => {
    setView(value);
    onChange && onChange(event, value);
  };
  return <ViewToggleButton {...rest} onChange={handleChange} value={view} />;
};

/**
 * Tests
 */
describe("Select", () => {
  test("can select card view", () => {
    render(<ViewToggleButtonWithState value="card" />);
    const cardButton = screen.getByTestId("cardButton");
    const tableButton = screen.getByTestId("tableButton");
    expect(cardButton.getAttribute("aria-pressed")).toBe("true");
    expect(tableButton.getAttribute("aria-pressed")).toBe("false");
  });
  test("can select table view", () => {
    render(<ViewToggleButtonWithState value="table" />);
    const cardButton = screen.getByTestId("cardButton");
    const tableButton = screen.getByTestId("tableButton");
    expect(cardButton.getAttribute("aria-pressed")).toBe("false");
    expect(tableButton.getAttribute("aria-pressed")).toBe("true");
  });
  test("test onchange callback is called on click of an option", async () => {
    const onChange = jest.fn();
    render(<ViewToggleButtonWithState onChange={onChange} value="table" />);
    const cardButton = screen.getByTestId("cardButton");
    await userEvent.click(cardButton);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: cardButton }),
      expect.stringMatching(/card/)
    );
  });
  test("test onchange callback is not called on click of selected option", async () => {
    const onChange = jest.fn();
    render(<ViewToggleButtonWithState onChange={onChange} value="card" />);
    const cardButton = screen.getByTestId("cardButton");
    await userEvent.click(cardButton);
    expect(onChange).not.toHaveBeenCalled();
  });
});
