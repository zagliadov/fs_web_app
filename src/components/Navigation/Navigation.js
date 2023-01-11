import React from "react";
import Link from "next/link";
import styles from "../../../styles/Navigation.module.css";
import Box from "@mui/material/Box";
import { useRouteComparison } from "../../hooks/useRouteComparison";

export const Navigation = () => {
  const { pathname, isShopRoute, isRecipesRoute } = useRouteComparison();
  const { isActive, container } = styles;

  return (
    <Box sx={{ display: "flex" }}>
      <Link className={isShopRoute ? isActive : ""} href={"/shop"}>
        Shop
      </Link>
      <Link className={isRecipesRoute ? isActive : ""} href={"/recipes"}>
        Recipes
      </Link>
      <Link className={pathname === "/learn" ? isActive : ""} href={"/learn"}>
        Learn
      </Link>
      <Link className={pathname === "/about" ? isActive : ""} href={"/about"}>
        About
      </Link>
      <Link className={pathname === "/blog" ? isActive : ""} href={"/blog"}>
        Blog
      </Link>
    </Box>
  );
};
