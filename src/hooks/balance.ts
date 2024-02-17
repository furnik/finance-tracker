import { appState } from "@/state/app";
import { TTransaction } from "@/types/balance";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
const DATA = "DATA_STORAGE";

export const useGetBalance = () => {
  const [state, setState] = useState<Array<TTransaction>>([]);
  const [app, setApp] = useRecoilState(appState);

  const getDataHandler = () => {
    const data = localStorage.getItem(DATA);
    if (data) {
      const parseData = JSON.parse(data);
      return parseData;
    }
  };

  useEffect(() => {
    const data = getDataHandler();
    const timeoutId = setTimeout(() => {
      setState(data);
      setApp({ ...app, loading: false });
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return { data: state };
};

export const useSetBalance = () => {
  const setDataHandler = (props: TTransaction) => {
    const data = localStorage.getItem(DATA);
    if (data) {
      const parseData = JSON.parse(data);
      localStorage.setItem(DATA, JSON.stringify([props, ...parseData]));
    }
    localStorage.setItem(DATA, JSON.stringify([props]));
  };

  return { setDataHandler };
};
