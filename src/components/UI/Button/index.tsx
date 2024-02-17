import { PropsWithChildren } from "react";
import { ButtonVariants } from "@/constants/button";
import { GhostButton, FillButton, OutlineButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariants;
  callback: () => void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  callback,
  children,
}) => {
  switch (variant) {
    case ButtonVariants.FILL:
      return <FillButton onClick={callback}>{children}</FillButton>;
    case ButtonVariants.OUTLINE:
      return <OutlineButton onClick={callback}>{children}</OutlineButton>;

    default:
      return <GhostButton onClick={callback}>{children}</GhostButton>;
  }
};
