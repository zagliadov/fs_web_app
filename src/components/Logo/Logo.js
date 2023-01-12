import React from "react";
import AdbIcon from "@mui/icons-material/Adb";

export const Logo = () => {
  return (
    <div style={{ position: "absolute", left: "7%" }}>
      <AdbIcon sx={{ fontSize: 100, display: { xs: "none", md: "flex" } }} />
    </div>
  );
};
