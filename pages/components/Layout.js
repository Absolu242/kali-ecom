import React from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <HeaderBar />
      {children}
    </Container>
  );
}
