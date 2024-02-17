import { PropsWithChildren } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId =
  "144252430310-08qeosf8l86jthb416d1u3go9jgvrtga.apps.googleusercontent.com";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
};
