import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styled from "styled-components";
import { RiEdit2Line } from "react-icons/ri";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import { HiOutlineCube } from "react-icons/hi";
import {
  IoDocumentsOutline,
  IoDocumentText,
  IoSettingsOutline,
} from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import GenericIcon from "./icon";
import { TbMessageQuestion } from "react-icons/tb";
import { useState } from "react";

export const SideNav = () => {


  const [collapseNav, setCollapseNav] = useState(true)
  
  const toggleCollapseNav = () => {

    setCollapseNav(!collapseNav)
    
  }

  return (
    <>
      <StyledSidebar collapsed={collapseNav}>
        <Menu>
          <StyledMenuItem>
            <GenericIcon
              IconComponent={FaArrowRight}
              color="grey"
              size="24px"
              onClick={toggleCollapseNav}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <GenericIcon IconComponent={BiCategory} color="grey" size="24px" />
          </StyledMenuItem>
          <StyledMenuItem>
            <GenericIcon IconComponent={RiEdit2Line} color="grey" size="24px" />
          </StyledMenuItem>

          <StyledMenuItem>
            <GenericIcon
              IconComponent={IoDocumentsOutline}
              color="grey"
              size="24px"
            />
          </StyledMenuItem>

          <StyledMenuItem>
            <GenericIcon IconComponent={FiFileText} color="grey" size="24px" />
          </StyledMenuItem>

          <StyledMenuItem>
            <GenericIcon
              IconComponent={HiOutlineCube}
              color="grey"
              size="24px"
            />
          </StyledMenuItem>

          <StyledMenuItem>
            <GenericIcon
              IconComponent={IoSettingsOutline}
              color="grey"
              size="24px"
            />
          </StyledMenuItem>

          <StyledMenuItem>
            <GenericIcon
              IconComponent={TbMessageQuestion}
              color="grey"
              size="24px"
            />
          </StyledMenuItem>
        </Menu>
        <AvatarContainer>
          <img width={"35px"} src="/usefulMediaAvata.png" alt="avatar" />
          <FaChevronDown />  </AvatarContainer>
      </StyledSidebar>
    </>
  );
};

const StyledSidebar = styled(Sidebar)`
  height: 100vh;
  background: #0f050e;
  width: 108px;
  padding-top: 62px;
  .ps-sidebar-container {
    display: flex;
    background: #0f050e;
    color: #fff;
    flex-direction: column;
  }
`;

const AvatarContainer = styled.div`
  margin-top: auto;
  margin-bottom: 99px;
  display: flex;
  align-items: center;
  background : #260D21;
  padding: 4px;
  justify-content: space-between;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledMenuItem = styled(MenuItem)`
`
