import { Avatar } from "@/components/UI/Avatar";
import { Today } from "./Today";
import { Wrapper } from "./styles";
import { useRecoilValue } from "recoil";
import { userState } from "@/state";
import { Divider } from "@/components/UI/Divider";

export const Header = () => {
  const { current } = useRecoilValue(userState);
  return (
    <Wrapper>
      <Divider horizontal={20} />
      <Today />
      <Avatar src={current?.picture} />
    </Wrapper>
  );
};
