import React from "react";
import { useRouter } from "next/router";

const Endpoint = ({ data }) => {
  const { id, name, img, title, total, profit, description } = data;

  if (!data) {
    return (
      <div>
        <h2>There is no data</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={`${img}`} alt={`${title}`} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/recipes_categories/${context.params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Endpoint;
