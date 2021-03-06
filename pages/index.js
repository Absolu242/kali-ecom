import React from "react";
import { Layout } from "../components/_layout";
import { storefront } from "../utils/shopify-client";
import { ProductsQuery } from "../queries/products.query";
import { HomeView } from "../components/_views/Home";

export default function Home({ products }) {
  return (
    <>
      <Layout>
        <HomeView products={products} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await storefront(ProductsQuery).then((result) => {
    return result;
  });

  return {
    props: {
      products: data ? data : null,
    },
  };
};
