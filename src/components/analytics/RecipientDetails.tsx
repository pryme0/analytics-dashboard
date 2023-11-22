import styled from "styled-components";
import { Button } from "../Button";
import { Accordion, AccordionSummary } from "@mui/material";
import { FaChevronDown } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Moment from "react-moment";
import { PiWarningOctagonLight } from "react-icons/pi";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export interface RecipientDetailsInterface {
  groupIndex?: string;
  data: DetailsData[];
}

export interface DetailsData {
  role?: string;
  recipientEmail?: string;
  documentStatus?: string;
  documentStatusIconType?: string;
  statusIconType?: string;
}

export const RecipientDetails = (props: RecipientDetailsInterface) => {
  return (
    <>
      <StyledAccordion style={{ boxShadow: "none" }}>
        <AccordionSummary>
          <AccordionHeader>
            <AccordionHeaderText>
              Group {props.groupIndex}
              <FaChevronDown />
            </AccordionHeaderText>
            <DateContainer>
              <FaCalendarAlt />
              Date sent:
              <Moment format="Do MMM, YYYY" date={Date.now()} />
            </DateContainer>
          </AccordionHeader>
        </AccordionSummary>
        {props.data.map((item) => {
          return (
            <DetailsSection>
              <EmptyItem></EmptyItem>
              <DetailsItem>
                <ItemText>{item.role}</ItemText>
              </DetailsItem>
              <DetailsItem>
                <ItemText> {item.recipientEmail} </ItemText>
              </DetailsItem>
              <DetailsItem>
                <Button
                  icon={
                    item.statusIconType === "warning" ? (
                      <PiWarningOctagonLight />
                    ) : (
                      <IoIosCheckmarkCircleOutline />
                    )
                  }
                  color="#D6A243"
                  backgroundColor="rgba(214, 162, 67, 0.20)"
                  buttonText={item.documentStatus}
                />
              </DetailsItem>
              <DetailsItem>
                <Button
                  icon={<LuRefreshCcw />}
                  color="#fff"
                  backgroundColor="#744BD2"
                  buttonText="Resend notification"
                />
              </DetailsItem>
            </DetailsSection>
          );
        })}
      </StyledAccordion>
    </>
  );
};

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: space-between;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AccordionHeaderText = styled.h4`
  margin-right: 20px;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const StyledAccordion = styled(Accordion)`
  margin-top: 20px;
  box-shadow: none;
  border: none;
  @media (max-width: 760px) {
    width: 100%;
    max-width: 760px;
  }
  @media (max-width: 414px) {
    width: 100%;
    max-width: 380px;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 52px;
  justify-content: space-between;
  @media (max-width: 760px) {
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    border-bottom: 1px solid #919394;
    padding-bottom: 10px;
  }
`;

const DetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

export const EmptyItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  @media (max-width: 760px) {
    display: none;
  }
`;

const ItemText = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.15px;
  word-wrap: break-word;
`;
