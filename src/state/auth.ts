import { atom } from "recoil";

interface AuthState {
  isAuth: boolean;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuth: false,
  },
});
