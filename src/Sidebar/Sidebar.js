import { Box, Link, Typography } from "@mui/material";

import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "@mui/material/styles";

// sidebar component for app which displays logo, list of items and app version
function Sidebar({
  appVersion,
  children,
  logoLinkUrl = null,
  showLogo = true,
  showVersion = true
}) {
  // use theme
  const theme = useTheme();

  // define components
  const logoBox = (
    <Box
      component="img"
      alt="App Logo"
      src={theme.palette.mode === "dark" ? "/ipgLogoDark.png" : "/ipgLogo.png"}
      height={40}
    />
  );

  return (
    <>
      {children}
      <Box flexGrow={1} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={theme => theme.spacing(2)}
      >
        {showLogo ? (
          <>
            {logoLinkUrl ? (
              <Link href={logoLinkUrl} underline="none">
                {logoBox}
              </Link>
            ) : (
              logoBox
            )}
          </>
        ) : null}
        {showVersion ? (
          <Typography color={theme => theme.palette.text.primary}>
            {appVersion}
          </Typography>
        ) : null}
      </Box>
    </>
  );
}

Sidebar.propTypes = {
  /**
   * App version to display at base of sidebar.
   */
  appVersion: PropTypes.string,
  /**
   * The content of the component. Recommended children are SidebarItem and SidebarDivider, but any valid react element can be used.
   */
  children: PropTypes.node,
  /**
   * A String of the href URL for the Link of the IPG Logo, default is null (link disabled)
   */
  logoLinkUrl: PropTypes.string,
  /**
   * Boolean to determine if logo should be displayed at the top of the sidebar
   */
  showLogo: PropTypes.bool,
  /**
   * Boolean to determine if version should be displayed at the bottom of the sidebar
   */
  showVersion: PropTypes.bool
};

export default Sidebar;
