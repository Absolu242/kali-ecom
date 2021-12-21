import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 2rem;
  text-align: center;

  .header {
    min-width: 900px;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .header div {
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }
  .body {
    min-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
  }
  .body > * {
    flex: 1;
    font-size: 1.1rem;
  }
  .image {
    width: 100px;

    img {
      width: 90px;
      height: 40px;
    }
  }
  .buttons > * {
    width: 25px;
    height: 30px;
    background-color: black;
    color: white;
    border: none;
    margin: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: block;
    overflow: scroll;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      background-color: #f0f2f5;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgb(0, 0, 0);
      background: #000;
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 5px;
    }
  }
`;
