import React from "react";
import { Logo } from "../Logo/Logo";
import { Box } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";
import { LocalNavigation } from "../LocalNavigation/LocalNavigation";

export const Header = () => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Logo />
        <Navigation />
        <LocalNavigation />
      </Box>
  );
};
