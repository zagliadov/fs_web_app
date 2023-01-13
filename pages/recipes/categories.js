import React from "react";
import Box from '@mui/material/Box';
import { RecipesCategories } from "../../src/components/RecipesCategories/RecipesCategories";

const Categories = () => {

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      paddingTop: 10,
    }}>
      <RecipesCategories />
    </Box>
  );
};

export default Categories;
