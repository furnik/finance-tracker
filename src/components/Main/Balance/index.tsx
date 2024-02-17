import { useMemo } from "react";
import { TextElements, TextVariants } from "@/constants/text";
import { parseBalanceToString } from "@/helpers/balance";
import { Text } from "@/components/UI/Text";
import { Wrapper, Row, Column, BalanceRow } from "./styles";
import { useRecoilValue } from "recoil";
import { balanceState } from "@/state/balance";

export const Balance = () => {
  const { balance } = useRecoilValue(balanceState);
  const { money, coin, card, cash } = useMemo(
    () => parseBalanceToString(balance),
    [balance]
  );

  return (
    <Wrapper>
      <BalanceRow>
        <Text variant={TextVariants.TERTIARY} element={TextElements.BALANCE}>
          {money}
        </Text>
        <Text variant={TextVariants.TERTIARY} element={TextElements.CURRENCY}>
          .{coin}
        </Text>
      </BalanceRow>
      <Column>
        <Row>
          <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
            Card balance:
          </Text>
          <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
            {card}
          </Text>
        </Row>
        <Row>
          <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
            Cash balance:
          </Text>
          <Text variant={TextVariants.SECONDARY} element={TextElements.P}>
            {cash}
          </Text>
        </Row>
      </Column>
    </Wrapper>
  );
};
