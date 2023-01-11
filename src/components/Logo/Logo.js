import React from "react";
import AdbIcon from "@mui/icons-material/Adb";

export const Logo = () => {
  return (
    <div style={{ position: "relative" }}>
      <AdbIcon sx={{ fontSize: 140, display: { xs: "none", md: "flex" } }} />
    </div>
  );
};
