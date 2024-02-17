import styled, { css } from "styled-components";

const styles = css`
  font-size: 16px;
  cursor: pointer;
`;

export const GhostButton = styled.button`
  border: none;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  color: ${({ theme }) => theme.pink};
  ${styles};
`;

export const FillButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.pink};
  height: 44px;
  padding: 0 20px;
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  ${styles};
`;

export const OutlineButton = styled.button`
  border: 2px solid ${({ theme }) => theme.pink};
  background: none;
  height: 44px;
  padding: 0 20px;
  color: ${({ theme }) => theme.pink};
  border-radius: 6px;
  ${styles};
`;
