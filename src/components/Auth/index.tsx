import { Wrapper } from "./styles";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Text } from "../UI/Text";
import { TextElements, TextVariants } from "@/constants/text";
import { useSetRecoilState } from "recoil";
import { TUser, authState, userState } from "@/state";
import { parseUserData } from "@/helpers/parseData";

export const Auth = () => {
  const setAuth = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);

  const loginHandler = (res: CredentialResponse) => {
    if (!res.credential) return;
    const userData = jwtDecode(res.credential);
    setUser((prev) => ({ ...prev, current: parseUserData(userData as TUser) }));
    setAuth((prev) => ({ ...prev, isAuth: true }));
  };

  return (
    <Wrapper>
      <Text variant={TextVariants.TERTIARY} element={TextElements.H2}>
        Sign in with
      </Text>

      <GoogleLogin onSuccess={loginHandler} onError={console.log} />
    </Wrapper>
  );
};
