import styled from "styled-components";

interface CardBoxProps {
  width: string;
  display: string;
  border: string;
}

export const CardBox = styled.div<CardBoxProps>`
  width: ${(props) => props.width};
  height: auto;
  display: ${(props) => props.display};
  justify-content: space-around;
  border: ${(props) => props.border};
  margin: 0 0.1vw;
`;
