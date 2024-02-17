import { PropsWithChildren, useRef, MouseEventHandler } from "react";
import { Wrapper, ContentWrapper } from "./styles";

interface ModalProps {
  onClose?: () => void;
  index?: number;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  index,
  onClose,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (
      ref.current &&
      ref.current.isEqualNode(event.target as Node) &&
      onClose
    ) {
      onClose();
    }
  };

  return (
    <Wrapper index={index} ref={ref} onClick={handleClick}>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};
