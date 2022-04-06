import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-content: center;

  .home-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 250px);
    width: 100%;

   
  }

  @media (max-width: 768px) {
    .home-grid {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;

      a {
        display: flex;
        position: relative;
        justify-content: center;
        text-align: center;
        z-index: 1;
        height: 200px;
      }
    }
  }

  @media (max-width: 765px) {
    .home-grid {
      grid-template-columns: 1fr;
      justify-content: center;

      a {
        display: flex;
        position: relative;
        justify-content: center;
        text-align: center;
        z-index: 1;
        height: 200px;
      }
    }
  }
`;
