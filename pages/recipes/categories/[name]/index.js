import React from "react";
import { useRouter } from "next/router";

const Endpoint = ({ data }) => {
  const router = useRouter();
  return (
    <div style={{
      display: "flex"
    }}>
      {/* <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
      <div>
        <img src={`${recipe.img}`} alt={`${recipe.title}`} />
      </div> */}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/recipes_categories`);
  const data = await res.json();

  return { props: { data } };
}

export default Endpoint;
