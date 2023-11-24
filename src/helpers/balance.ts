import { TBalance } from "@/types/balance";

export const getBalance = (balance: TBalance) => {
  const value = balance.card + balance.cash;
  return value.toFixed(2);
};
