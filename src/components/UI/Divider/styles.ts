import styled from "styled-components";
import { DividerProps } from ".";

export const DividerWrapper = styled.div<DividerProps>`
  margin: ${({ horizontal, vertical }) =>
    `${vertical || 0 / 2}px ${horizontal || 0 / 2}px`};
`;
