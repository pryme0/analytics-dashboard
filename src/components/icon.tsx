import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

export const GenericIcon = ({
  IconComponent,
  color,
  size,
  onClick
}: {
  IconComponent: IconType;
  size?: string;
    color?: string;
  onClick?: ()=>void
}) => {
  return (
    <StyledIcon style={{ color, fontSize: size }}>
      <IconComponent onClick={onClick} />
    </StyledIcon>
  );
};

export default GenericIcon;

const StyledIcon = styled.div``;
