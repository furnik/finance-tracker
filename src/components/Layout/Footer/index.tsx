import { useState, lazy, Suspense } from "react";
import { AddButton } from "@/components/Layout/Footer/AddButton";
import { FooterWrapper } from "./styles";

const Form = lazy(() => import("./Form"));

export const Footer = () => {
  const [active, setActive] = useState(false);

  const changeVisibleHandler = () => setActive((prev) => !prev);

  return (
    <FooterWrapper>
      {active && (
        <Suspense>
          <Form onClose={changeVisibleHandler} />
        </Suspense>
      )}
      <AddButton callback={changeVisibleHandler} />
    </FooterWrapper>
  );
};
