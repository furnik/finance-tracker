import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  background: none;
  border: 2px solid ${({ theme }) => theme.secondaryText};
  border-radius: 8px;
  padding: 0 20px;
  outline: none;
  font-size: 16px;
  transition: 0.3s;

  &:focus-visible,
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.pink};
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
