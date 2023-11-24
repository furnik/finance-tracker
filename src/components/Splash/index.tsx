import { TextElements, TextVariants } from "../../constants/text";
import { Divider } from "@/components/UI/Divider";
import { Text } from "@/components/UI/Text";
import { Coin } from "./Coin";
import { Wrapper, CreatedText } from "./styles";

export const Splash = () => {
  return (
    <Wrapper>
      <Coin />
      <Divider vertical={10} />
      <Text variant={TextVariants.PRIMARY} element={TextElements.H1}>
        finance tracker
      </Text>
      <CreatedText variant={TextVariants.SECONDARY} element={TextElements.P}>
        created by S&D
      </CreatedText>
    </Wrapper>
  );
};
