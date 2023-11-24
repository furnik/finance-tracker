import styled from "styled-components";
import { Text } from "@/components/UI/Text";
import { device } from "@/constants/device";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;

  height: 100vh;
  position: relative;
`;

export const CreatedText = styled(Text)`
  position: absolute;
  bottom: 50px;
  ${device.tablet} {
    bottom: 90px;
  }
`;
