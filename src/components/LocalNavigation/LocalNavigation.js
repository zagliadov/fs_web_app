import React from "react";
import { useRouteComparison } from "../../hooks/useRouteComparison";
import styles from "../../../styles/Navigation.module.css";
import Link from "next/link";

export const LocalNavigation = () => {
  const { pathname, isShopRoute, isRecipesRoute } = useRouteComparison();
  const { isActive } = styles;

  return (
    <div>
      {isShopRoute && (
        <>
          <Link
            className={pathname === "/shop/categories" ? isActive : ""}
            href={"/shop/categories"}
          >
            Categories
          </Link>
          <Link
            className={pathname === "/shop/collection" ? isActive : ""}
            href={"/shop/collection"}
          >
            Collection
          </Link>
          <Link
            className={pathname === "/shop/resources" ? isActive : ""}
            href={"/shop/resources"}
          >
            Resources
          </Link>
        </>
      )}
      {isRecipesRoute && (
        <>
          <Link
            className={pathname === "/recipes/categories" ? isActive : ""}
            href={"/recipes/categories"}
          >
            Categories
          </Link>
          <Link
            className={pathname === "/recipes/collection" ? isActive : ""}
            href={"/recipes/collection"}
          >
            Collection
          </Link>
          <Link
            className={pathname === "/recipes/resources" ? isActive : ""}
            href={"/recipes/resources"}
          >
            Resources
          </Link>
        </>
      )}
    </div>
  );
};
