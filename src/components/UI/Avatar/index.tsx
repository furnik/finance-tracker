import React from "react";
import { Image } from "./styles";

interface AvatarProps {
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const source = src ? src : "";
  return <Image src={source} />;
};
