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
      max-width: 200px;
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
      transform: translate(-12%, 15%);
    }

    .right {
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

          .color {
            margin-right: 1rem;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            font-size: 1rem;

            &.active,
            &:hover,
            &:active,
            &:focus {
              outline-color: #aaa;
              outline-width: thick;
            }
          }
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

          &:hover {
            background: none;
            color: #000;
            border-color: #aaa;
          }
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
  background-color: ${(props) => (props.id === props.btnId ? "#000" : "none")};
  color: ${(props) => (props.id === props.btnId ? "#fff" : "#000")};
`;
