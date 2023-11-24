import styled from "styled-components";

export const Line = styled.div`
  width: 4px;
  height: 40px;
  background: ${({ theme }) => theme.white};
  position: absolute;
  border-radius: 2px;
  transition: 0.5s;
`;

export const Button = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: ${({ theme }) => theme.primaryText};
  border: none;

  position: relative;
  z-index: 10;

  ${Line} {
    &:first-of-type {
      transform: ${({ $active }) => `rotate(${$active ? 315 : 0}deg)`};
    }
    &:last-of-type {
      transform: ${({ $active }) => `rotate(${$active ? 405 : 90}deg)`};
    }
  }
`;
