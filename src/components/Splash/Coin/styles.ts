import styled, { keyframes } from "styled-components";
import { device } from "@/constants/device";

export const spin = keyframes`
0% {
  transform: rotateY(0deg) scale(var(--scale));
}
100% {
  transform: rotateY(360deg) scale(var(--scale));
}
`;

export const flipTail = keyframes`
0% {
  background-image: var(--gradient);
  color: transparent;
}
50% {
  background-image: none;
  color: var(--yellow);
}
100% {
  background-image: var(--gradient);
  color: transparent;
}
`;

export const flipHead = keyframes`
0% {
  background-image: none;
  color: var(--yellow);
}
50% {
  background-image: var(--gradient);
  color: transparent;
}
100% {
  background-image: none;
  color: var(--yellow);
}
`;

export const CoinWrapper = styled.div`
  --diameter: 201px;
  --thickness: 20px;
  --scale: 0.75;
  --period: 5s;
  --gradient: ${({ theme }) =>
    `linear-gradient(${theme.gold} 0%, ${theme.yellow} 50%, ${theme.gold} 100%)`};
  --yellow: ${({ theme }) => theme.yellow};

  transform-style: preserve-3d;
  width: var(--diameter);
  height: var(--diameter);
  animation: ${spin} var(--period) linear infinite;
  ${device.tablet} {
    --diameter: 161px;
    --thickness: 16px;
  }
`;

export const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.yellow_2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--yellow);
  font-size: calc(var(--diameter) * 0.6);
  font-weight: bold;
`;

export const Head = styled(Side)`
  transform: translateZ(calc(var(--thickness) / 2));
  animation: ${flipHead} var(--period) linear infinite;
`;

export const Tail = styled(Side)`
  transform: translateZ(calc(0px - var(--thickness) / 2)) rotateY(180deg);
  animation: ${flipTail} var(--period) linear infinite;
`;
export const Edge = styled.div`
  position: absolute;
  width: var(--thickness);
  height: 100%;
  transform: translateX(calc(var(--diameter) / 2))
    translateZ(calc(var(--thickness) / 2)) rotateY(90deg);
  transform-origin: 0 0;
  background-color: ${({ theme }) => theme.yellow_2};
  background-image: var(--gradient);
`;
