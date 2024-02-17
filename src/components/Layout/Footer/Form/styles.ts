import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;
