import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { TextElements, TextVariants } from "@/constants/text";
import { Text } from "@/components/UI/Text";
import { TodayWrapper } from "./styles";

export const Today = () => {
  const [date, setDate] = useState(new Date());

  const format = dayjs(date).format("D MMM");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TodayWrapper>
      <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
        today, {format}
      </Text>
    </TodayWrapper>
  );
};
