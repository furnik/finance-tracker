import { TUser } from "@/state";

export const parseUserData = (user: TUser) => {
  return {
    name: user.name,
    email: user.email,
    picture: user.picture,
  };
};
