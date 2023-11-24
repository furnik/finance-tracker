import { PropsWithChildren } from "react";
import { H1, H2, P, Balance } from "./styles";
import { TextVariants, TextElements } from "@/constants/text";

export type TextProps = {
  variant: TextVariants;
  element: TextElements;
};

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  const { element } = props;
  switch (element) {
    case TextElements.H1:
      return <H1 {...props}>{children}</H1>;
    case TextElements.H2:
      return <H2 {...props}>{children}</H2>;
    case TextElements.BALANCE:
      return <Balance {...props}>{children}</Balance>;
    default:
      return <P {...props}>{children}</P>;
  }
};
