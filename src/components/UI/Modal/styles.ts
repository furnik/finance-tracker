import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  transform: 1;
}
`;

export const Wrapper = styled.div<{ index?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ index }) => index || 11};
  transition: 0.5s;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`;
