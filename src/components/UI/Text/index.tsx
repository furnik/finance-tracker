import { PropsWithChildren } from "react";
import { H1, H2, P } from "./styles";
import { Variants, Elements } from "../../../constants/text";

export type TextProps = {
  variant: Variants;
  element: Elements;
};

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  const { element } = props;
  switch (element) {
    case Elements.H1:
      return <H1 {...props}>{children}</H1>;
    case Elements.H2:
      return <H2 {...props}>{children}</H2>;
    default:
      return <P {...props}>{children}</P>;
  }
};
