import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";

export const LayoutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <Layout loading={loading} />;
};
