import { RouterProvider } from "@/providers/routerProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import { StateProvider } from "@/providers/stateProvider";
import { AuthProvider } from "@/providers/authProvider";

export const App = () => {
  return (
    <AuthProvider>
      <StateProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </StateProvider>
    </AuthProvider>
  );
};
