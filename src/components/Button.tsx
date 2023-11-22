import { ReactNode } from "react";
import styled from "styled-components";

interface GenericButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  buttonText?: string;
  fontSize?: string;
  width?: string;
  icon?: ReactNode;
}

export const Button = (props: GenericButtonProps) => {
  return (
    <div>
      <StyledGenericButton
        width={props.width}
        fontSize={props.fontSize}
        bgColor={props.backgroundColor}
        color={props.color}
      >
        {props.icon && props.icon}
        {props.buttonText}
      </StyledGenericButton>{" "}
    </div>
  );
};

const StyledGenericButton = styled.button<{
  width?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
}>`
  display: flex;
  width: ${(props) => props.width || "100%"};
  padding: 16.387px;
  justify-content: center;
  align-items: center;
  gap: 8.193px;
  border-radius: 15px;
  background: ${(props) => props.bgColor || "#E3E7E8"};
  color: ${(props) => props.color || "#6E7070"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;
`;
