import { render, screen } from "@testing-library/react";
import React from "react";
import Select from "./";
import userEvent from "@testing-library/user-event";

// list of options to display
const options = [
  "Apple",
  "Banana",
  "Coconut",
  "Date",
  "Elderberry",
  "Fig",
  "Grapefruit",
  "Honeydew melon"
];

/**
 * Test wrapper for Select
 *
 * Provides state for value to avoid errors changing from uncontrolled to controlled.
 */
const SelectWithState = ({ onChange, value: valueIn = "", ...rest }) => {
  const [value, setValue] = React.useState(valueIn);
  const handleChange = event => {
    setValue(event.target.value);
    onChange && onChange(event);
  };
  return <Select {...rest} onChange={handleChange} value={value} />;
};

/**
 * Tests
 */
describe("Select", () => {
  test("can select an item", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn(event => event.target.value);
    const { container } = render(
      <SelectWithState options={options} onChange={onChange} />
    );
    const value = options[3];

    // get the button that opens the dropdown, which is a sibling of the input
    const selectButton = container.parentNode.querySelector("[role=button]");

    // open the select dropdown
    await user.click(selectButton);

    // click the list item
    const listItem = screen.getByText(value);
    if (!listItem) throw new Error("No listItem");
    await user.click(listItem);
    expect(onChange).toHaveReturnedWith(value);
  });
  test("shows error state", () => {
    const { container } = render(<SelectWithState error options={options} />);
    const inputBase = container.querySelector(".MuiInputBase-root");
    expect(inputBase).toHaveClass("Mui-error");
  });
  test("display empty if value is not a valid option", () => {
    const { container } = render(
      <SelectWithState options={options} value="Invalid value" />
    );
    const baseComponent = container.querySelector(".MuiSelect-nativeInput");
    expect(baseComponent.value).toBe("");
  });
  test("display the value if it's a valid option", () => {
    const { container } = render(
      <SelectWithState options={options} value="Apple" />
    );
    const baseComponent = container.querySelector(".MuiSelect-nativeInput");
    expect(baseComponent.value).toBe("Apple");
  });
});
