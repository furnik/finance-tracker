import { PropsWithChildren } from "react";
import { ButtonVariants } from "@/constants/button";
import { GhostButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariants;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case ButtonVariants.GHOST:
      return <GhostButton>{children}</GhostButton>;

    default:
      return <div>ok</div>;
  }
};
