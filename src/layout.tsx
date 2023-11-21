import { SideNav,DocumentAnalytics } from "./components";
import styled from "styled-components";

export const Layout = () => {
  return (
    <>
      <Container>
        <SideNav />
        <RightSection>
          <DocumentAnalytics />
        </RightSection>
      </Container>
    
    </>
  );
};

const Container = styled.div`
display:flex;
`;

const RightSection = styled.div`
display:flex;
padding: 60px;
`;
