import React, { useState } from "react";
import ProductCard from "../../Card/ProductCard";
import Link from "next/link";
import { Hero } from "../../Hero";
import { StyledHomeContainer } from "./Home.styles";

export const HomeView = ({ products }) => {
  const ShopProducts = products === null ? [] : products.data.products.edges;

  return (
    <>
      <Hero />
      <StyledHomeContainer>
        <div className="home-grid">
          {ShopProducts.map((item, i) => (
            <Link
              href={`product/${item.node.handle}`}
             
              key={i}
            >
              <a  className={`grid-item`}>
                <ProductCard item={item.node} />
              </a>
            </Link>
          ))}
        </div>
      </StyledHomeContainer>
    </>
  );
};
