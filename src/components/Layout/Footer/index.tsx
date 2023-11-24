import { useState } from "react";
import { AddButton } from "../../UI/Button/AddButton";
import { FooterWrapper } from "./styles";

export const Footer = () => {
  const [active, setActive] = useState(false);
  return (
    <FooterWrapper>
      <AddButton callback={() => setActive(!active)} />
    </FooterWrapper>
  );
};
