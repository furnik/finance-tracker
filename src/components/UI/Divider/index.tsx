import { DividerWrapper } from "./styles";

export interface DividerProps {
  vertical?: number;
  horizontal?: number;
}

export const Divider = (props: DividerProps) => {
  return <DividerWrapper {...props} />;
};
