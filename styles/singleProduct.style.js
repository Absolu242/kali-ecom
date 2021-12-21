import styled from "styled-components";

export const SingleProductContainer = styled.div`
  position: relative;
  background-color: #f4f4f4;
  background-position: 45% 60%;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: 40%;
  //background-image: none !important;

  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 70vh;

    .left {
      width: 40%;
      .vendor {
        font-size: 1.4rem;
      }

      .title {
        font-size: 2rem;
        font-weight: 600;
        padding: 1rem 0;
      }
    }

    .image {
      position: relative;
      img {
        position: relative;
        left: 10%;
        width: 75%;
        animation: bounceUp 1.2s ease infinite alternate;
      }

      @keyframes bounceUp {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-20px);
        }
      }
    }

    .right {
      width: 40%;
      .sizes {
        .label {
          font-size: 1.4rem;
          text-transform: uppercase;
          font-weight: 600;
          padding-bottom: 1rem;
        }

        &-list {
          display: flex;
        }
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;

        .label {
          font-size: 1.3rem;
          color: #aaa;
          text-transform: uppercase;
          font-weight: 600;
        }

        .value {
          font-size: 1.4rem;
          color: #000;
          font-weight: 600;
        }
      }

      .colors {
        .label {
          font-size: 1.4rem;
          text-transform: uppercase;
          font-weight: 600;
          padding-bottom: 1rem;
        }

        &-list {
          display: flex;
        }
      }

      .actions {
        display: flex;
        align-items: center;
        margin-top: 3rem;

        .toCart {
          background-color: #000;
          color: #fff;
          font-size: 1rem;
          padding: 1.5rem 1.5rem;
          margin-right: 3rem;
          border: 2px solid #000;
          font-weight: 600;

          &:disabled {
            background-color: #aaa;
            border: none;
            cursor: not-allowed;

            &:hover {
              color: #fff;
              border-color: none;
            }
          }
        }
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      top: 5rem;

      .left,
      .right {
        width: 60%;
      }
      .image {
        position: relative;
        padding: 3rem 0;
        img {
          transform: translate(20%, 10%);
        }
      }
    }
  }

  .relatedProducts {
    position: relative;
    padding-top: 10rem;
    .heading {
      p {
        font-weight: 600;
        font-size: 2rem;
        padding: 2rem 0;
      }
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
      padding-top: 25rem;
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 765px) {
      padding-top: 20rem;
      position: relative;
      width: 100%;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;

        a {
          display: flex;
          justify-content: center;
        }
      }
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
  background-color: ${(props) => (props.id === props.btnid ? "#000" : "none")};
  color: ${(props) => (props.id === props.btnid ? "#fff" : "#000")};
`;

export const ColorButton = styled.button`
  margin-right: 1rem;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 1rem;
  outline: none;
  border: 1px solid #aaa;

  ${(props) =>
    props.id === props.btnid
      ? "animation: bounce .8s ease infinite alternate"
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
