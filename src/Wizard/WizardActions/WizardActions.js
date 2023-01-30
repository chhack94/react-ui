import * as React from "react";

import PropTypes from "prop-types";
import { Stack } from "@mui/material";

/**
 * Wizard actions is a layout component that displays buttons in a row.
 */
export default function WizardActions({ children, mx }) {
  return (
    <Stack
      role="toolbar"
      direction="row"
      justifyContent="flex-end"
      spacing={2}
      p={3}
      sx={{
        backgroundColor: theme => theme.palette.background.paper
      }}
      mx={mx}
    >
      {children}
    </Stack>
  );
}

// prop types
WizardActions.propTypes = {
  /**
   * Horizontal margin
   */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
