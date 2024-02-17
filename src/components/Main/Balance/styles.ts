import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  height: 100px;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

export const BalanceRow = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
