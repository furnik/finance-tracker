import { TBalanceData } from "@/types/balance";

function numberToLocaleString(number: number) {
  const parts = number.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

export const parseBalanceToString = (balance: TBalanceData) => {
  const values = numberToLocaleString(balance.card + balance.cash).split(".");
  return {
    money: values[0],
    coin: values[1] + " " + balance.currency,
    card: numberToLocaleString(balance.card) + " " + balance.currency,
    cash: numberToLocaleString(balance.cash) + " " + balance.currency,
  };
};
