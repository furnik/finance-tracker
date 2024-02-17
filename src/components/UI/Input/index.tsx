import { useRef } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder?: string;
  type?: "text" | "number";
  onChange: (value: number) => void;
}

export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = () => {
    onChange(Number(ref.current?.value || 0));
  };

  return <StyledInput ref={ref} {...props} onBlur={changeHandler} />;
};
