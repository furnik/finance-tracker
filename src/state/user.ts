import { atom } from "recoil";

export type TUser = {
  name: string;
  email: string;
  picture: string;
};

interface UserState {
  current: null | TUser;
}

export const userState = atom<UserState>({
  key: "userState",
  default: {
    current: null,
  },
});
