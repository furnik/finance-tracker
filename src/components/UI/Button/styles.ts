import styled from "styled-components";

export const GhostButton = styled.button`
  border: none;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.pink};
`;
