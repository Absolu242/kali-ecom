import React from "react";
import { singleProductQuery } from "../../queries/singleProduct.query";
import { storefront } from "../../utils/shopify-client";
import { Layout } from "../../components/_layout";
import { ProductView } from "../../components/_views/Product";

export default function Product({ product, products }) {
  return (
    <>
      <Layout topbar>
        <ProductView products={products} product={product} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const data = await storefront(`
  {
    products(first: 9) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
  
  `)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    paths: data.data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const data = await storefront(singleProductQuery, {
    handle: params.handle,
  })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
  return {
    props: {
      product: data.data.productByHandle,
      products: data.data.products,
    },
  };
};
