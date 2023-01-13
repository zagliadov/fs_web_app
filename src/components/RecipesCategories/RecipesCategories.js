import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

export const RecipesCategories = () => {
  const [categories, setCategories] = React.useState();
  const { pathname } = useRouter();
  console.log(pathname);
  React.useEffect(() => {
    fetch("http://localhost:3000/api/recipes_categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
    return () => {
      setCategories();
    };
  }, []);

  if (!categories) return;

  return (
    <Grid container>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categories &&
          categories.map((category) => {
            return (
              <Card sx={{ maxWidth: 345, margin: "20px" }} key={category.id}>
                <CardMedia
                  component="img"
                  alt={category.title}
                  height="250"
                  image={category.img}
                />
                <Link
                  href={`${pathname}${category.endpoint}`}

                >
                  {category.title}
                </Link>
              </Card>
            );
          })}
      </Grid>
    </Grid>
  );
};
