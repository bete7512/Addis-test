import React, { ReactNode } from "react";
import { Main,Container,Header } from "./styled/styled";
interface MainLayoutProps {
  children: ReactNode;
}
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
