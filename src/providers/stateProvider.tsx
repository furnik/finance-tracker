import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
