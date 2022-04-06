import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 5rem 7rem 0rem 7rem;
  transition: all 0.5s ease;
  background-color: #f4f4f4;

  &.activate {
    background-image: none !important;
    background-color: #fff;
  }

  @media (max-width: 765px) {
    padding: 2rem;
  }
`;
export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
`;
export const HeaderLeft = styled.div`
  button {
    outline: none;
  }
  .menu-icon {
    padding-right: 5rem;
  }

  @media (max-width: 765px) {
    .menu-icon {
      padding-right: 2rem;
    }
  }
`;
export const HeaderCenter = styled.div`
  position: relative;
  transform: translateX(5rem);

  div {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      &:hover {
        color: #000;
      }
    }

    .separator {
      position: relative;
      width: 1rem;
      height: 2px;
      background-color: #fff;
      margin: 0 0.5rem;
    }
  }

  &.activate {
    opacity: 0;
  }

  @media (max-width: 765px) {
    display: none;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  .btn {
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    transition: all 0.3s ease;

    &-prim {
      border: 2px solid #fff;
      color: #fff;
      padding: 1.3rem 3rem;
      margin-right: 1.8rem;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }

    &-secn {
      background-color: #fff;
      padding: 1.5rem 1.2rem;
      border: 2px solid #fff;
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }

  &.activate {
    .btn {
      &-prim {
        border: 2px solid #aaa;
        color: #fff;
        padding: 1rem 3rem;
        margin-right: 1.8rem;

        &:hover {
          background: #000;
          border-color: #000;
          color: #fff;
        }
      }

      &-secn {
        background-color: #000;
        padding: 1.5rem 1.2rem;
        color: #fff;
        border-width: 2px;
        &:hover {
          background-color: #fff;
          color: #000;
          border-color: #aaa;
        }
      }
    }
  }

  @media (max-width: 765px) {
    .btn {
      font-size: 1rem;
      &-prim {
        padding: 1rem 2.7rem;
        margin-right: 1rem;
      }

      &-secn {
        padding: 1.2rem 0.9rem;
      }
    }

    &.activate {
      .btn {
        font-size: 1rem;
        &-prim {
          padding: 1rem 2.7rem;
          margin-right: 1rem;
        }

        &-secn {
          padding: 1.2rem 0.9rem;
        }
      }
    }
  }
`;
export const HeaderMain = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, 10%);
  transition: all 0.3s ease;

  .item {
    &-name {
      font-size: 6.5rem;
    }

    &-btn {
      position: relative;
      padding-top: 2rem;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Work Sans", sans-serif;
    }
  }
  .annonce {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    right: 4rem;

    .line {
      position: relative;
      width: 1.5rem;
      height: 2px;
      background-color: #fff;
      margin: 0 0.5rem;
      top: 0.2rem;
    }
  }

  .mainHidden {
    position: absolute;
    width: 70%;
    color: #aaaaaa;
    justify-content: space-between;
    align-items: flex-start;
    display: none;

    &__left {
      .socials {
        position: relative;
        padding-bottom: 2rem;

        a {
          background-color: #000;
          padding: 1rem;

          img {
            position: relative;
            top: 0.2rem;
          }

          &:hover {
            background-color: #aaa;
          }
        }
      }

      .address {
        padding-top: 5rem;
        .city {
          font-size: 2rem;
          font-weight: 600;
          color: #000;
        }

        .ref {
          padding-top: 1rem;
          font-size: 1.8rem;
          line-height: 3rem;
        }
      }
    }

    &__right {
      position: relative;
      top: -1rem;
      ul {
        list-style-type: none;

        li {
          font-size: 5rem;
          font-weight: 600;
          padding-bottom: 1.5rem;

          a {
            transition: all 0.3s ease;
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
  }

  &.activate {
    height: 80%;
    .item,
    .annonce {
      opacity: 0;
    }

    .mainHidden {
      display: flex;
    }
  }

  @media (max-width: 765px) {
    height: 80%;
    .annonce {
      position: absolute;
      right: 0;
    }

    .mainHidden {
      &__left {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .mainHidden {
      width: 100%;
    }
  }
`;
export const HeaderBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  text-align: center;

  .item {
    &-name {
      font-size: 5.5rem;
    }

    &-btn {
      position: relative;
      padding-top: 2rem;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Work Sans", sans-serif;
      animation: bounceUp 1.8s ease infinite alternate;
    }

    @keyframes bounceUp {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-5px);
      }
    }
  }

  &.activate {
    opacity: 0;
  }
`;
