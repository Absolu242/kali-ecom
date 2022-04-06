import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 3rem 0;
  transition: all 0.5s ease;

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
  display: flex;
  align-items: center;
  button {
    outline: none;
  }
 

  a{
    position: relative;
    font-size: 1.6rem;
    color: #000;
    padding-right: 3rem;
    transition: all .3s ease;

    &:hover{
      transform: translateY(-15%);
    }
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

  .btn-back {
    display: flex;
    align-items: center;
    outline: none;

    p {
      padding-left: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }

  div {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    a {
      color: #000;
      &:hover {
        color: #000;
      }
    }

    .separator {
      position: relative;
      width: 1rem;
      height: 2px;
      background-color: #000;
      margin: 0 0.5rem;
    }
  }

  &.activate {
    opacity: 0;
  }

  @media (max-width: 765px) {
    div {
      display: none;
    }
    .btn-back {
      position: relative;
      left: -5rem;

      p {
        display: none;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .index {
    position: relative;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    width: 35px;
    height: 35px;
    top: -1.4rem;
  }

  .btn {
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    transition: all 0.3s ease;
    &-prim {
      border: 2px solid #aaa;
      color: #000;
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
  }
`;
