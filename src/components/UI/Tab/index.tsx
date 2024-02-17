import { PropsWithChildren } from "react";
import { StyledTab } from "./styles";

interface TabProps {
  value: string;
  active: boolean;
  onChange: (value: string) => void;
}

export const Tab: React.FC<PropsWithChildren<TabProps>> = ({
  value,
  onChange,
  ...props
}) => {
  const changeHandler = () => {
    onChange(value);
  };
  return (
    <StyledTab {...props} onClick={changeHandler}>
      {value}
    </StyledTab>
  );
};
