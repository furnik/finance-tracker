import { TBalanceData } from "@/types/balance";
import { atom } from "recoil";

interface BalanceState {
  balance: TBalanceData;
  isModal: boolean;
}

export const balanceState = atom<BalanceState>({
  key: "balanceState",
  default: {
    balance: {
      card: 437.85,
      cash: 1124.5,
      currency: "UAH",
    },
    isModal: false,
  },
});
