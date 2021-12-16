import React from "react";
import ProductCard from "./components/ProductCard";
import Layout from "./components/Layout";
import Link from "next/link";
import { storefront } from "../utils/shopify-client";
import { ProductsQuery } from "../queries/products.query";

export default function Home({ products }) {
  const ShopProducts = products.data.products.edges;

  return (
    <Layout>
      <div className="catalog">
        <div className="filter">cool</div>
        <div className="grid">
          {ShopProducts.map((item, i) => {
            return (
              <Link
                href={`product/${item.node.handle}`}
                className="grid-item"
                key={i}
              >
                <a>
                  <ProductCard item={item.node} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await storefront(ProductsQuery).then((result) => {
    return result;
  });
  return {
    props: {
      products: data,
    },
  };
};
