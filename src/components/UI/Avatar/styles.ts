import styled from "styled-components";

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.tertiaryText};
`;
