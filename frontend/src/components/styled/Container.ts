/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";



const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;


export { Center, Container };
