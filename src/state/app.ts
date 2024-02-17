import { atom } from "recoil";

interface AppState {
  loading: boolean;
}

export const appState = atom<AppState>({
  key: "appState",
  default: {
    loading: true,
  },
});
