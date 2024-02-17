import { Layout } from "@/components/Layout";
import { useGetBalance } from "@/hooks/balance";

export const LayoutPage = () => {
  const { data } = useGetBalance();
  console.log(data);

  return <Layout />;
};
