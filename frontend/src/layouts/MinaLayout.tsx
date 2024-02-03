import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface MainLayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  /* Center the content horizontally */
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Main = styled.main`
  padding: 10px;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <div>
        <Header>Addis Software Test Project </Header>
        <Main>{children}</Main>
      </div>
    </Container>
  );
};

export default MainLayout;
