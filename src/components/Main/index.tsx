import { Balance } from "./Balance";

const balance = {
  card: 437.85,
  cash: 1124.5,
};

export const Main = () => {
  return <Balance balance={balance} />;
};
