import styled, { css, DefaultTheme } from "styled-components";
import { TextProps } from ".";
import { TextElements } from "@/constants/text";
import { device } from "@/constants/device";

function textColor({ variant, theme }: DefaultTheme) {
  switch (variant) {
    case "primary":
      return `
        background: ${theme.primaryText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
    case "secondary":
      return `
          color: ${theme.secondaryText};
        `;
    default:
      return `color: ${theme.tertiaryText};`;
  }
}

const getWeight = ({ elements }: DefaultTheme) => {
  switch (elements) {
    case TextElements.H1:
      return 400;
    case TextElements.H2:
      return 400;

    default:
      return 400;
  }
};

const styles = css`
  ${textColor};
  font-weight: ${getWeight};
`;

export const H1 = styled.h1<TextProps>`
  font-size: 36px;
  ${styles};
  ${device.tablet} {
    font-size: 24px;
  }
`;

export const H2 = styled.h2<TextProps>`
  ${styles};
`;

export const P = styled.p<TextProps>`
  font-size: 16px;
  ${styles};
`;

export const Balance = styled.p<TextProps>`
  font-size: 48px;
  ${styles};
`;
