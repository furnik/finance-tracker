import { useState } from "react";
import { Button, Line } from "./styles";

interface ButtonProps {
  callback: () => void;
}

export const AddButton = ({ callback }: ButtonProps) => {
  const [active, setActive] = useState(false);

  const onButtonClick = () => {
    setActive((prev) => !prev);
    callback();
  };

  return (
    <Button $active={active} onClick={onButtonClick}>
      <Line />
      <Line />
    </Button>
  );
};
