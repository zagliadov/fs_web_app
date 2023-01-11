import React from "react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Box, Container } from "@mui/material";
import { LocalNavigation } from "../LocalNavigation/LocalNavigation";

export const Header = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Navigation />
      </Box>
      <LocalNavigation />
    </Container>
  );
};
