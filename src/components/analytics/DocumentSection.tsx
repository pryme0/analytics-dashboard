import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import {
  EmptyItem,
  RecipientDetails,
  RecipientDetailsInterface,
} from "./RecipientDetails";
import { faker } from "@faker-js/faker";

export const DocumentSection = () => {
  const [tabValue, setTabValue] = useState(0);

  const TabPanel = ({
    children,
    value,
    index,
  }: {
    children: any;
    value: any;
    index: any;
  }) => {
    return (
      <Typography component="div" role="tabpanel" hidden={value !== index}>
        {value === index && <div>{children}</div>}
      </Typography>
    );
  };

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const documentDetails: RecipientDetailsInterface[] = [
    {
      groupIndex: "1",
      data: [
        {
          role: "Employer",
          recipientEmail: faker.internet.email(),
          documentStatus: "Email opened",
          documentStatusIconType: "warning",
          statusIconType: "warning",
        },
        {
          role: "Employee",
          recipientEmail: faker.internet.email(),
          documentStatus: "Notification sent",
          documentStatusIconType: "warning",
          statusIconType: "warning",
        },
        {
          role: "Human resource",
          recipientEmail: faker.internet.email(),
          documentStatus: "viewed form",
          documentStatusIconType: "warning",
          statusIconType: "warning",
        },
      ],
    },

    {
      groupIndex: "2",
      data: [
        {
          role: "Employer",
          recipientEmail: faker.internet.email(),
          documentStatus: "Document generated",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
        {
          role: "Employee",
          recipientEmail: faker.internet.email(),
          documentStatus: "Document generated",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
        {
          role: "Human resource",
          recipientEmail: faker.internet.email(),
          documentStatus: "Document generated",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
      ],
    },

    {
      groupIndex: "3",
      data: [
        {
          role: "Employer",
          recipientEmail: faker.internet.email(),
          documentStatus: "Signature: Completed",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
        {
          role: "Employee",
          recipientEmail: faker.internet.email(),
          documentStatus: "Signature: Completed",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
        {
          role: "Human resource",
          recipientEmail: faker.internet.email(),
          documentStatus: "Signature: Completed",
          documentStatusIconType: "mark",
          statusIconType: "mark",
        },
      ],
    },
  ];

  return (
    <Container>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab style={{ width: "18%" }} label="Generated document" />
        <Tab style={{ width: "15%" }} label="Responses" />
        <Tab style={{ width: "15%" }} label="Summary" />
        <Tab style={{ width: "15%" }} label="Recipient history" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <HeaderSection>
          <EmptyItem></EmptyItem>
          <HeaderItem>
            <ItemText>Role</ItemText>
          </HeaderItem>
          <HeaderItem>
            <ItemText>Recipient email</ItemText>
          </HeaderItem>
          <HeaderItem>
            <ItemText>Document status</ItemText>
          </HeaderItem>
          <HeaderItem>
            <ItemText>Action</ItemText>
          </HeaderItem>
        </HeaderSection>
        {documentDetails.map((item) => {
          return <RecipientDetails {...item} />;
        })}
      </TabPanel>
      {/* <TabPanel value={tabValue} index={1}></TabPanel>
      <TabPanel value={tabValue} index={2}></TabPanel>
      <TabPanel value={tabValue} index={3}></TabPanel> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 86.23px;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 52px;
  justify-content: space-between;

  @media (max-width: 760px) {
    margin-top: 20px;
    justify-content: unset;
    gap: 20px;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  @media (max-width: 760px) {
    width: unset;
    justify-content: flex-start;
  }
`;
const ItemText = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.15px;
`;
