import * as React from "react";

import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Typography,
  autocompleteClasses
} from "@mui/material";

import AlwaysOpenAutocomplete from "../AlwaysOpenAutocomplete";
import LabelChip from "../../LabelSelector/LabelChip/LabelChip";
import PropTypes from "prop-types";

/**
 * A label filter allows the user to select multiple labels from a list.
 */
export default function LabelFilter({
  variant = "popper",
  value = [],
  limitTags = -1,
  ...props
}) {
  const defaults = { limitTags, value };
  return variant === "popper" ? (
    <LabelFilterPopper {...props} {...defaults} />
  ) : (
    <LabelFilterAlwaysOpen {...props} {...defaults} />
  );
}

/**
 * A label filter that opens a popper above other elements.
 */
function LabelFilterPopper({
  label,
  name,
  onChange,
  options,
  value,
  limitTags
}) {
  return (
    <Autocomplete
      getOptionLabel={option => option.name}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      limitTags={limitTags}
      multiple
      noOptionsText="No labels"
      onChange={(e, newValue) => onChange(newValue)}
      options={options}
      value={value}
      renderInput={params => (
        <TextField {...params} label={label} name={name} />
      )}
      renderOption={Option}
      renderTags={Tags}
    />
  );
}

/**
 * An inline label filter is always open and the popper does not sit above other elements.
 */
function LabelFilterAlwaysOpen({
  name,
  label,
  options,
  value,
  limitTags,
  onChange
}) {
  return (
    <AlwaysOpenAutocomplete
      getOptionLabel={option => option.name}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      limitTags={limitTags}
      multiple
      noOptionsText="No labels"
      onChange={(e, newValue) => onChange(newValue)}
      options={options}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label={label}
            name={name}
            sx={{
              [`& .${autocompleteClasses.popupIndicator}`]: { display: "none" }
            }}
          />
        );
      }}
      renderOption={Option}
      renderTags={Tags}
      value={value}
    />
  );
}

// render for label chips
function Tags(labels, getTagProps, { onChange, value }) {
  return labels.map(label => (
    <LabelChip
      key={label._id}
      label={label.name}
      color={label.color}
      style={{ marginLeft: 2 }}
      onDelete={e =>
        onChange(
          e,
          value.filter(l => l._id !== label._id)
        )
      }
      clickable={false}
    />
  ));
}

// render for label options
function Option(props, option, { selected }) {
  return (
    <li {...props}>
      <Checkbox
        checked={selected}
        sx={{
          "&.Mui-checked": {
            color: option.color
          },
          color: option.color,
          ml: -1,
          mr: 1
        }}
      />
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        <Typography mb={-0.5}>{option.name}</Typography>
        <Typography variant="caption">
          {option.description || "No description"}
        </Typography>
      </Box>
    </li>
  );
}

// prop types
LabelFilter.propTypes = {
  /**
   * The label for the filter.
   */
  label: PropTypes.string,
  /**
   * The name for the input.
   */
  name: PropTypes.string,
  /**
   * Callback function to handle changes
   * @param {Array} value - The new value
   * @returns {void}
   */
  onChange: PropTypes.func,
  /**
   * The options to select from
   * @type {Array}
   * @example
   * [
   *  { _id: 1, color: "#005FA8", description: "first label", name: "label 1" },
   *  { _id: 2, color: "#005FA8", description: "second label", name: "label 2" }
   * ]
   */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The selected value
   * @type {Array}
   * @example
   * [
   * { _id: 1, color: "#005FA8", description: "first label", name: "label 1" },
   * ]
   * @default []
   */
  value: PropTypes.arrayOf(PropTypes.object),
  /**
   * The variant of the filter
   * @type {string}
   * @default "popper"
   * @enum {"popper", "always-open"}
   */
  variant: PropTypes.oneOf(["popper", "always-open"])
};
