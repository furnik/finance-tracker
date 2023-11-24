import { useMemo } from "react";
import { TextElements, TextVariants } from "@/constants/text";
import { ButtonVariants } from "@/constants/button";
import { getBalance } from "@/helpers/balance";
import { Text } from "@/components/UI/Text";
import { TBalance } from "@/types/balance";
import { Wrapper, Row } from "./styles";
import { Button } from "@/components/UI/Button";

interface BalanceProps {
  balance: TBalance;
}

export const Balance = ({ balance }: BalanceProps) => {
  const value = useMemo(() => getBalance(balance), [balance]);
  return (
    <Wrapper>
      <Row>
        <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
          balance
        </Text>
        <Button variant={ButtonVariants.GHOST}>view</Button>
      </Row>
      <Text variant={TextVariants.TERTIARY} element={TextElements.BALANCE}>
        {value}
      </Text>
    </Wrapper>
  );
};
