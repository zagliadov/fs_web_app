import React from "react";
import Link from "next/link";
import styles from "../../../styles/Navigation.module.css";
import Box from "@mui/material/Box";
import { useRouteComparison } from "../../hooks/useRouteComparison";

export const Navigation = () => {
  const { pathname, isShopRoute, isRecipesRoute } = useRouteComparison();
  const { isActive, customLink } = styles;

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft:{xs: "2%", md: "18%"},
      }}
    >
      <Link
        className={`${customLink} ${isShopRoute ? isActive : ""} `}
        href={"/shop"}
      >
        Shop
      </Link>
      <Link
        className={`${customLink} ${isRecipesRoute ? isActive : ""}`}
        href={"/recipes"}
      >
        Recipes
      </Link>
      <Link
        className={`${customLink} ${pathname === "/learn" ? isActive : ""}`}
        href={"/learn"}
      >
        Learn
      </Link>
      <Link
        className={`${customLink} ${pathname === "/about" ? isActive : ""}`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`${customLink} ${pathname === "/blog" ? isActive : ""} `}
        href={"/blog"}
      >
        Blog
      </Link>
    </Box>
  );
};
