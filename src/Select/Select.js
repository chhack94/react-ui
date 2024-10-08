import { MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

/**
 * Select components are used for collecting user provided information from a list of options.
 */
export default function Select({
  error = false,
  disabled = false,
  helperText,
  label,
  margin = "normal",
  onChange = () => {},
  options = [],
  required = false,
  size = "medium",
  value,
  variant = "outlined"
}) {
  // return components
  return (
    <TextField
      select
      required={required}
      variant={variant}
      error={error}
      margin={margin}
      fullWidth
      label={label}
      value={options.includes(value) ? value : ""}
      onChange={onChange}
      disabled={disabled}
      id={label}
      helperText={helperText}
      size={size}
    >
      {options.map(option => (
        <MenuItem value={option} key={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

Select.propTypes = {
  /**
   * If true, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the component will display an error state.
   */
  error: PropTypes.bool,
  /**
   * Helper text to display below input.
   */
  helperText: PropTypes.string,
  /**
   * Label to display above input.
   */
  label: PropTypes.string,
  /**
   * If dense or normal, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(["none", "dense", "normal"]),
  /**
   * Callback fired when the value is changed.
   *
   * **Signature**
   * ```
   * function(event: object) => void
   * ```
   * _event_: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * Array of options to display.
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /**
   * If true, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
  /**
   * The size of the select field.
   */
  size: PropTypes.oneOf(["medium", "small"]),
  /**
   * The input value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
};
