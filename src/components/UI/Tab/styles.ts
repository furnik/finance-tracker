import styled from "styled-components";

export const StyledTab = styled.button<{ active: boolean }>`
  border: 2px solid ${({ theme }) => theme.pink};
  background: ${({ theme, active }) => (active ? theme.pink : "transparent")};
  height: 30px;
  padding: 0 20px;
  color: ${({ theme, active }) => (active ? theme.white : theme.pink)};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`;
