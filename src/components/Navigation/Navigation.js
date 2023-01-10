import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "../../../styles/Home.module.css";

export const Navigation = () => {
  return (
    <>
      <Link href={"/shop"}>Shop</Link>
      <Link href={"/recipes"}>Recipes</Link>
      <Link href={"/learn"}>Learn</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
    </>
  );
};
