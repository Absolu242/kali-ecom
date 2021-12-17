import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-color: #f2f2f2;
  width: 200px;
  height: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  margin: 1.5rem 0;
  border-radius: 5px;

  .Cardcontent {
    position: relative;
    top: 5rem;
    width: 100%;
    .Cardimg {
      transition: all 0.3s;
    }

    .Cardbottom {
      position: relative;
      top: 1rem;
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem;

      .action {
        background-color: #000;
        font-size: 1rem;
        padding: 0 1.2rem !important;
        color: #fff;
        height: 18px;
        border-width: 2px;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }

      .price {
        color: #000;
        padding: 1.5rem 0;
      }
    }
  }

  &:hover {
    .Cardimg {
      transform: translateY(-10%);
    }
  }
`;

export default function ProductCard({ item }) {
  const image = item.images.edges[0].node.src;
  const price = item.priceRange.maxVariantPrice.amount;

  return (
    <Container>
      <div className="Cardcontent">
        <div className="Cardimg">
          <img width={160} height={80} src={image} alt="product" />
        </div>
        <div className="Cardbottom">
          <button className="action">Add to cart</button>
          <p className="price">${price}</p>
        </div>
      </div>
    </Container>
  );
}
