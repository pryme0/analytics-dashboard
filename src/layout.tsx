import { SideNav, DocumentAnalytics } from "./components";
import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";
export const Layout = () => {
  return (
    <>
      <Container>
        <SideNav />
        <RightSection>
          <NotificationContainer>
            <IoIosCheckmarkCircle color="#047857" />
            <p> Notification Resent Successfully</p>
          </NotificationContainer>
          <AnalyticsSection>
            <DocumentAnalytics />
          </AnalyticsSection>
        </RightSection>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1728px;
  margin: 0px auto;

  @media (max-width: 760px) {
    padding: 20px;
  }
`;

const AnalyticsSection = styled.div`
  display: flex;
  padding: 0px 60px;
  flex-direction: column;
  @media (max-width: 760px) {
    padding: 0px;
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: #effbf3;
  margin-bottom: 34px;
  gap: 21px;
`;

const RightSection = styled.div`
  display: center;
  flex-direction: column;
  p {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.15px;
    color: #024532;
  }
`;
