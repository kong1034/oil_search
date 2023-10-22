import styled from "styled-components";

interface TextProps {
  fontSize: string;
  color: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  color: ${(props) => props.color};
  text-align: center;
`;
