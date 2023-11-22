import styled from "styled-components";
import { Button } from "../Button";

export const TopSection = () => {
  const cardData = [
    {
      title: "Impressions/views",
      value: "35,000",
    },

    {
      title: "Forms started",
      value: "17,000",
    },
    {
      title: "Forms Completed",
      value: "5,000",
    },
    {
      title: "Form submissions ",
      value: "15,000",
    },
    {
      title: "Pending completion ",
      value: "12,000",
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <h3>Document Analytics: </h3>
        <SubTitle>Lease Agreement</SubTitle>
      </TitleContainer>
      <CardSection>
        {cardData.map((item) => {
          return (
            <TopSectionCard>
              <HeaderText>
                {item.title}
                <MetricsText>{item.value}</MetricsText>
              </HeaderText>
            </TopSectionCard>
          );
        })}
      </CardSection>

      <ButtonSection>
        <Button buttonText="Edit document" backgroundColor="#E3E7E8" />
        <Button
          buttonText="Share workflow"
          color="#fff"
          backgroundColor="#582FBA"
        />
      </ButtonSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 47px;
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const SubTitle = styled.h3`
  color: #582fba;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.15px;
  margin-left: 10px;
`;

const CardSection = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ButtonSection = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const TopSectionCard = styled.div`
  display: flex;
  width: 223px;
  padding: 23px;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid var(--Grey-s-100, #ebeded);

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const HeaderText = styled.h3`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.25px;
  margin: 0px;
`;

const MetricsText = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 0px;
`;
