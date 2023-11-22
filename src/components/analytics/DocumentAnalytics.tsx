import styled from "styled-components";
import { TopSection } from "./TopSection";
import { DocumentSection } from "./DocumentSection";

export const DocumentAnalytics = () => {
  return (
    <>
      <Container>
        <TopSection />
        <DocumentSection />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
