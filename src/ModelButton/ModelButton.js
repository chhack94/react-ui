import * as React from "react";

import { Box, IconButton, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

/**
 * Model button component to display a button with an icon, label and border color based on the model status
 */
export default function ModelButton({
  disabled = false,
  icon = null,
  label = "",
  onClick = () => {},
  status = "none"
}) {
  // use theme hook
  const theme = useTheme();

  // set border color based on status
  let borderColor = theme.palette.text.secondary;
  if (disabled) {
    borderColor =
      theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.38)"
        : "rgba(255, 255, 255, 0.5)";
  } else if (status === "error") {
    borderColor = theme.palette.error.main;
  } else if (status === "warning") {
    borderColor = theme.palette.warning.main;
  } else if (status === "success") {
    borderColor = theme.palette.success.main;
  }

  // render component
  return (
    <Box
      sx={{
        height: "144px",
        position: "absolute",
        width: "100px"
      }}
    >
      <IconButton
        data-testid="model-button"
        disabled={disabled}
        disableRipple
        onClick={onClick}
        sx={{
          "&:hover": {
            background: theme =>
              theme.palette.mode === "light"
                ? "rgba(0, 48, 99, 0.04)"
                : "rgba(2, 136, 209, 0.12)",
            border: theme => `2px solid ${theme.palette.primary.main}`,
            color: theme => theme.palette.primary.main
          },
          alignItems: "center",
          border: `2px solid ${borderColor}`,
          borderRadius: "20px",
          bottom: "30.56%",
          boxSizing: "border-box",
          color: theme =>
            theme.palette.mode === "light"
              ? theme.palette.common.black
              : theme.palette.common.white,
          display: "flex",
          flexDirection: "row",
          fontSize: "40px",
          left: "0%",
          padding: "16px",
          position: "absolute",
          right: "0%",
          top: "0%",
          transition: "all 0.2s ease-in-out"
        }}
      >
        {icon
          ? React.cloneElement(icon, {
              sx: {
                height: "60px",
                width: "60px"
              }
            })
          : null}
      </IconButton>
      <Typography
        sx={{
          alignItems: "center",
          bottom: "0%",
          color: disabled
            ? theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.38)"
              : "rgba(255, 255, 255, 0.5)"
            : theme => theme.palette.text.secondary,
          display: "flex",
          flexDirection: "row",
          fontSize: "13px",
          gap: "10px",
          justifyContent: "center",
          left: "0%",
          position: "absolute",
          right: "0%",
          textAlign: "center",
          top: "69.44%"
        }}
        color="textSecondary"
        variant="body2"
      >
        {label}
      </Typography>
    </Box>
  );
}

ModelButton.propTypes = {
  /**
   * If `true`, the button will be disabled. Default is `false`.
   */
  disabled: PropTypes.bool,
  /**
   * The icon component to render inside the button. Can be set to `null` to not display an icon. MUI SVG icons are recommended.
   */
  icon: PropTypes.node,
  /**
   * The label text to display. Default is an empty string.
   */
  label: PropTypes.string,
  /**
   * Callback fired when the button is clicked.
   *
   * **Signature**
   * ```
   * function(event: React.MouseEvent<HTMLElement>) => void
   * ```
   * event: The event source of the callback.
   */
  onClick: PropTypes.func,
  /**
   * The status string that determines the border color of the button. Default is `none`.
   */
  status: PropTypes.oneOf(["none", "error", "warning", "success"])
};
