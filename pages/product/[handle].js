import Image from "next/image";
import React, { useState } from "react";
import { singleProductQuery } from "../../queries/singleProduct.query";
import {
  SingleProductContainer,
  SizeButton,
} from "../../styles/singleProduct.style";
import { storefront } from "../../utils/shopify-client";
import Layout from "../components/Layout";

export default function SingleProduct({ product }) {
  const [BtnId, setBtnId] = useState(null);

  return (
    <>
      {product ? (
        <SingleProductContainer
          style={{
            backgroundImage: `url(${product.images.edges[0].node.src})`,
          }}
        >
          <Layout single={true}>
            <div className="content">
              <div className="left">
                <p className="vendor">{product.vendor} </p>
                <p className="title">{product.title}</p>
                <p className="desc"></p>
              </div>

              {/* <div className="image">
                <Image
                  width={550}
                  height={20}
                  src="/item.png"
                  alt="menu"
                  className="menu-icon"
                />
              </div> */}

              <div className="right">
                <div className="sizes">
                  <p className="label">size</p>
                  <div className="sizes-list">
                    {product.options
                      .filter((item) => item.name === "Size")[0]
                      .values.map((size, i) => (
                        <SizeButton
                          key={i}
                          id={i}
                          btnId={BtnId}
                          onClick={() => setBtnId(i)}
                        >
                          {size}
                        </SizeButton>
                      ))}
                  </div>
                </div>

                <div className="info">
                  <div className="label">price</div>
                  <p className="value">
                    ${product.priceRange.maxVariantPrice.amount}
                  </p>
                </div>
                <div className="colors">
                  <div className="label">COLOR</div>

                  <div className="colors-list">
                    {product.options
                      .filter((item) => item.name === "Color")[0]
                      .values.map((color, i) => (
                        <button
                          key={i}
                          className="color"
                          style={{ backgroundColor: `${color}` }}
                        ></button>
                      ))}
                  </div>
                </div>

                <div className="actions">
                  <button className="toCart">ADD TO CART</button>
                  <button className="towish">
                    {" "}
                    <Image
                      width={18}
                      height={18}
                      src="/IconsHeart.png"
                      alt="wish list"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Layout>
        </SingleProductContainer>
      ) : (
        <div className="loading">Loading</div>
      )}
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
  
  `).then((result) => {
    return result;
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
  }).then((result) => {
    return result;
  });
  return {
    props: {
      product: data.data.productByHandle,
    },
  };
};
