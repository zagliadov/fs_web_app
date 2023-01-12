import React from "react";
import { useRouteComparison } from "../../hooks/useRouteComparison";
import styles from "../../../styles/Navigation.module.css";
import Link from "next/link";
import { Box } from "@mui/material";

export const LocalNavigation = () => {
  const { pathname, isShopRoute, isRecipesRoute } = useRouteComparison();
  const { isActive, customLocalLink } = styles;

  return (
    <Box sx={{
      backgroundColor: "#F7F5EF",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft:{xs: "2%", md: "18%"},
    }}>
      {isShopRoute && (
        <>
          <Link
            className={`${customLocalLink} ${pathname === "/shop/categories" ? isActive : ""}`}
            href={"/shop/categories"}
          >
            Categories
          </Link>
          <Link
            className={`${customLocalLink} ${pathname === "/shop/collection" ? isActive : ""}`}
            href={"/shop/collection"}
          >
            Collection
          </Link>
          <Link
            className={`${customLocalLink} ${pathname === "/shop/resources" ? isActive : ""}`}
            href={"/shop/resources"}
          >
            Resources
          </Link>
        </>
      )}
      {isRecipesRoute && (
        <>
          <Link
            className={`${customLocalLink} ${pathname === "/recipes/categories" ? isActive : ""}`}
            href={"/recipes/categories"}
          >
            Categories
          </Link>
          <Link
            className={`${customLocalLink} ${pathname === "/recipes/collection" ? isActive : ""}`}
            href={"/recipes/collection"}
          >
            Collection
          </Link>
          <Link
            className={`${customLocalLink} ${pathname === "/recipes/resources" ? isActive : ""}`}
            href={"/recipes/resources"}
          >
            Resources
          </Link>
        </>
      )}
    </Box>
  );
};
