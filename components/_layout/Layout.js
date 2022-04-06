import React from "react";
import styled from "styled-components";
import HeaderBar from "../HeaderBar";

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 7rem;

  @media (max-width: 765px) {
    padding: 0 1rem;
  }
`;

export const Layout = ({ children, single, topbar })=> {
  return (
    <Container>
     {topbar &&  <HeaderBar single={single} />}
      {children}
    </Container>
  );
}
