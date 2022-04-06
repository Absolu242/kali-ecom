import React from "react";
import { Layout } from "../../components/_layout";
import { storefront } from "../../utils/shopify-client";
import { ProductsQuery } from "../../queries/products.query";
import {CatalogView} from "../../components/_views/Catalog";

export default function Home({ products }) {
  return (
    <>
      <Layout topbar={true}>
        <CatalogView products={products} />
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
