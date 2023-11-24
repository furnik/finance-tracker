import { Elements, Variants } from "../../constants/text";
import { Divider } from "../UI/Divider";
import { Text } from "../UI/Text";
import { Coin } from "./Coin";
import { Wrapper, CreatedText } from "./styles";

export const Splash = () => {
  return (
    <Wrapper>
      <Coin />
      <Divider vertical={10} />
      <Text variant={Variants.PRIMARY} element={Elements.H1}>
        finance tracker
      </Text>
      <CreatedText variant={Variants.SECONDARY} element={Elements.P}>
        created by S&D
      </CreatedText>
    </Wrapper>
  );
};
