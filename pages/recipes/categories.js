import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = React.useState();
  const { pathname } = useRouter();

  React.useEffect(() => {
    fetch("http://localhost:3000/api/recipes_categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);
  // console.log(categories)
  return (
    <>
      <h4>Categories</h4>
      {categories &&
        categories.map((category) => {
          console.log(category)
          return <Link key={category.id} href={`${pathname}${category.endpoint}`}>{category.name}</Link>;
        })}
    </>
  );
};

export default Categories;
