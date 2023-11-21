
import styled from "styled-components";

export const TopSection = () => {
    return(    <Container>
        <h3>Document Analytics:Lease Agreement</h3>
        <CardSection>
        <TopSectionCard>
            <HeaderText>
                Impressions/views
                <MetricsText>35,000</MetricsText>
            </HeaderText>
        </TopSectionCard>
            <TopSectionCard>
            <HeaderText>
                Impressions/views
                <MetricsText>35,000</MetricsText>
            </HeaderText>
        </TopSectionCard>
            <TopSectionCard>
            <HeaderText>
                Impressions/views
                <MetricsText>35,000</MetricsText>
            </HeaderText>
            </TopSectionCard>
                 <TopSectionCard>
            <HeaderText>
                Impressions/views
                <MetricsText>35,000</MetricsText>
            </HeaderText>
            </TopSectionCard>
                 <TopSectionCard>
            <HeaderText>
                Impressions/views
                <MetricsText>35,000</MetricsText>
            </HeaderText>
        </TopSectionCard>
        </CardSection>
    </Container>)
}


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const CardSection = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
flex-wrap: wrap;
`;

const TopSectionCard = styled.div`
display: flex;
width: 240px;
padding: 0px 23px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px; 
border-radius: 15px;
border: 1px solid var(--Grey-s-100, #EBEDED);
`;

const HeaderText = styled.h3`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 10px;
letter-spacing: 0.25px; 
`;

const MetricsText = styled.h3`
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal; 
`;

