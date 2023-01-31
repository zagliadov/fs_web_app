import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useRouteComparison } from "../../hooks/useRouteComparison";
import styles from "../../../styles/Navigation.module.css";

export const SubNavigation = () => {
  const router = useRouter();
  const { parent, firstSibling, secondSibling } = useRouteComparison();
  console.log(secondSibling)
  const { customSubLink } = styles;
  if (parent === undefined) return;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className={`${customSubLink}`} href={`/${parent}`}>
        {parent}
      </Link>
      {firstSibling && (
        <Link
          className={`${customSubLink}`}
          href={`/${parent}/${firstSibling}`}
        >
          {firstSibling}
        </Link>
      )}

      {secondSibling && (
        <Link
          className={`${customSubLink}`}
          href={`/${parent}/${firstSibling}/${secondSibling}`}
        >
          {secondSibling}
        </Link>
      )}
    </Breadcrumbs>
  );
};
