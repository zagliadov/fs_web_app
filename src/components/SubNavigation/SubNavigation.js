import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import styles from "../../../styles/Navigation.module.css";

export const SubNavigation = () => {
  const router = useRouter();
  const { customSubLink } = styles;
  let parent = router.pathname.split('/')[1];
  if (parent === undefined) return;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className={`${customSubLink}`} href={`/${parent}`}>
        {parent}
      </Link>
      <Link
        className={`${customSubLink}`}
        href={`/${parent}`}
      >
        Core
      </Link>
      <Link className={`${customSubLink}`} href="">
        some
      </Link>
    </Breadcrumbs>
  );
};
