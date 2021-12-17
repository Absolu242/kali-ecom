import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Layout from "./components/Layout";
import Link from "next/link";
import { storefront } from "../utils/shopify-client";
import { ProductsQuery } from "../queries/products.query";
import Filters from "./components/Filters";

export default function Home({ products }) {
  const [filters, setFilters] = useState({});

  const ShopProducts = products === null ? [] : products.data.products.edges;

  let filterProducts = ShopProducts.filter(
    (item) =>
      item.node.tags.includes(filters.color) === true ||
      item.node.tags.includes(filters.size) === true
  );

  return (
    <Layout>
      <div className="catalog">
        <div className="filter">
          <Filters filters={setFilters} />
        </div>
        <div className="grid">
          {ShopProducts === null ? (
            <div> loading </div>
          ) : filters.color === null && filters.size === null ? (
            ShopProducts.map((item, i) => {
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
            })
          ) : (
            filterProducts.map((item, i) => {
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
            })
          )}
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
      products: data ? data : null,
    },
  };
};
