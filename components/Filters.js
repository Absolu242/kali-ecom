import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  position: relative;
  width: 100%;

  .content {
    .option {
      padding-bottom: 3rem;
      .label {
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 600;
        padding-bottom: 1rem;
      }
    }
  }
`;

const Button = styled.button`
  margin-right: 1rem;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 1rem;
  background-color: ${(props) => props.color};
  outline: none;
  // ;
  ${(props) =>
    props.id === props.btnId
      ? "animation: bounce .3s ease infinite alternate"
      : ""};

  @keyframes bounce {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.8);
    }
  }
`;

export const SizeButton = styled.button`
  margin-right: 1rem;
  border: 1px solid #000;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-size: 1rem;
  outline: none;
  background-color: ${(props) => (props.id === props.btnId ? "#000" : "none")};
  color: ${(props) => (props.id === props.btnId ? "#fff" : "#000")};
`;

export default function Filters({ filters }) {
  //IDs
  const [SizeId, setSizeId] = useState(null);
  const [ColorId, setColorId] = useState(null);

  //filters
  const [isColor, setIsColor] = useState(null);
  const [isSize, setIsSize] = useState(null);
  const [isBrand, setIsBrand] = useState(null);

  //firing functions
  const onSelectSize = (e) => {
    if (SizeId === e.id) {
      setSizeId(null);
      setIsSize(null);
    } else {
      setSizeId(e.id);
      setIsSize(e.size);
    }
  };

  const onSelectColor = (e) => {
    if (ColorId === e.id) {
      setColorId(null);
      setIsColor(null);
    } else {
      setColorId(e.id);
      setIsColor(e.color);
    }
  };

  useEffect(() => {
    filters({ color: isColor, size: isSize, brand: isBrand });
  }, [filters, isColor, isSize, isBrand]);

  return (
    <FilterContainer>
      <div className="content">
        <div className="option">
          <div className="label">COLOR</div>
          <Button
            id="1"
            btnId={ColorId}
            color="black"
            onClick={() => onSelectColor({ id: "1", color: "black" })}
          />
          <Button
            id="2"
            btnId={ColorId}
            color="green"
            onClick={() => onSelectColor({ id: "2", color: "green" })}
          />
          <Button
            id="3"
            btnId={ColorId}
            color="pink"
            onClick={() => onSelectColor({ id: "3", color: "pink" })}
          />
        </div>

        <div className="option">
          <div className="label">Size</div>
          <SizeButton
            id="1"
            btnId={SizeId}
            onClick={() => onSelectSize({ id: "1", size: "40" })}
          >
            40
          </SizeButton>
          <SizeButton
            id="2"
            btnId={SizeId}
            onClick={() => onSelectSize({ id: "2", size: "41" })}
          >
            41
          </SizeButton>
          <SizeButton
            id="3"
            btnId={SizeId}
            onClick={() => onSelectSize({ id: "3", size: "42" })}
          >
            42
          </SizeButton>
          <SizeButton
            id="4"
            btnId={SizeId}
            onClick={() => onSelectSize({ id: "4", size: "43" })}
          >
            43
          </SizeButton>
        </div>

        <div className="option">
          <div className="label">Brand</div>
          <p className="value"> Nike</p>
        </div>
      </div>
    </FilterContainer>
  );
}
