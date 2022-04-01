import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { singleProductQuery } from "../../queries/singleProduct.query";
import { addToCart } from "../../redux/Slices/cart.slice";
import {
  ColorButton,
  SingleProductContainer,
  SizeButton,
} from "../../styles/singleProduct.style";
import { storefront } from "../../utils/shopify-client";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";

export default function SingleProduct({ product, products }) {
  const [SizeId, setSizeId] = useState(null);
  const [ColorId, setColorId] = useState(null);

  const [selectSize, setSelectSize] = useState(null);
  const [selectColor, setSelectColor] = useState(null);

  const dispatch = useDispatch();

  const ShopProducts = products === null ? [] : products.edges;

  const onSelectSize = (e) => {
    if (SizeId === e.id) {
      setSizeId(null);
      setSelectSize(null);
    } else {
      setSizeId(e.id);
      setSelectSize(e.size);
    }
  };

  const onSelectColor = (e) => {
    if (ColorId === e.id) {
      setColorId(null);
      setSelectColor(null);
    } else {
      setColorId(e.id);
      setSelectColor(e.color);
    }
  };

  const options = [
    { name: "Color", values: [selectColor] },
    { name: "Size", values: [selectSize] },
  ];

  const addProduct = {
    handle: product.handle,
    id: product.id,
    images: product.images,
    options,
    priceRange: product.priceRange,
    title: product.title,
    totalInventory: product.totalInventory,
  };

  const handleAddToCart = () => {
    if (selectColor === null || selectSize !== null) {
      dispatch(addToCart(addProduct));
    }
  };

  useEffect(() => {
    setSelectSize(null), setSelectColor(null);
    setSizeId(null);
    setColorId(null);
  }, [product.id]);

  console.log(product);
  return (
    <>
      {product ? (
        <SingleProductContainer>
          <Layout single={true}>
            <div className="content">
              <div className="left">
                <p className="vendor">{product.vendor} </p>
                <p className="title">{product.title}</p>
                <p className="desc"></p>
              </div>

              <div className="image">
                <img
                  src={product.images.edges[0].node.src}
                  alt="menu"
                  className="menu-icon"
                />
              </div>

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
                          btnid={SizeId}
                          onClick={() => onSelectSize({ id: i, size: size })}
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
                    {product.options.find((item) => item.name === "Color") !==
                      undefined &&
                      product.options
                        .filter((item) => item.name === "Color")[0]
                        .values.map((color, i) => (
                          <ColorButton
                            key={i}
                            className="color"
                            id={i}
                            btnid={ColorId}
                            style={{ backgroundColor: `${color}` }}
                            onClick={() =>
                              onSelectColor({ id: i, color: color })
                            }
                          ></ColorButton>
                        ))}
                  </div>
                </div>
                <div className="actions">
                  <button
                    onClick={() => handleAddToCart()}
                    className="toCart"
                    disabled={
                      selectColor === null || selectSize === null ? true : false
                    }
                  >
                    ADD TO CART
                  </button>
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
                {selectColor === null || selectSize === null ? (
                  <p
                    style={{
                      color: "#aaa",
                      padding: "1rem 0",
                      fontSize: "1.2rem",
                    }}
                  >
                    Please Select one size and a color
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="relatedProducts">
              <div className="heading">
                <p>Related Products</p>
              </div>

              <div className="grid">
                {ShopProducts.filter(
                  (item) => item.node.handle !== product.handle
                )
                  .slice(0, 4)
                  .map((item, i) => {
                    return (
                      <Link
                        href={`/product/${item.node.handle}`}
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
