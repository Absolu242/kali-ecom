import React, { useState } from "react";
import ProductCard from "../../Card/ProductCard";
import Link from "next/link";
import Filters from "../../Filters";
import Image from "next/image";

export const CatalogView = ({ products }) => {
  const [filters, setFilters] = useState({});
  const [isActive, setIsActive] = useState(false);

  const ShopProducts = products === null ? [] : products.data.products.edges;

  let filterProducts = ShopProducts.filter(
    (item) =>
      item.node.tags.includes(filters.color) === true ||
      item.node.tags.includes(filters.size) === true
  );

  return (
    <>
      <div className="catalog">
        <div className="filterWrapper">
          <button
            className="filter-icon"
            onClick={() => setIsActive((isActive) => !isActive)}
          >
            <Image
              width={20}
              height={17}
              src="/filter.png"
              alt="menu"
              className="menu-icon"
            />
          </button>
          <div className={isActive ? "filter active" : "filter"}>
            <Filters filters={setFilters} />
          </div>
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
    </>
  );
};
