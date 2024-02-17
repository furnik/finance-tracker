import { FormEvent, useState } from "react";
import { Input } from "@/components/UI/Input";
import { Modal } from "@/components/UI/Modal";
import { ButtonsWrapper, FormWrapper, TabsWrapper } from "./styles";
import { Button } from "@/components/UI/Button";
import { ButtonVariants } from "@/constants/button";
import { Tab } from "@/components/UI/Tab";
import { tabs } from "@/constants/tab";
import { useSetBalance } from "@/hooks/balance";

interface FormProps {
  onClose: () => void;
}

const initialValue = {
  value: 0,
  type: tabs[0],
  date: new Date(),
};

const AddForm: React.FC<FormProps> = ({ onClose }) => {
  const [state, setState] = useState(initialValue);
  const { setDataHandler } = useSetBalance();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };

  const enterHandler = () => {
    setDataHandler(state);
    onClose();
  };

  const changeHandler = (key: string) => (value: string | number) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  console.log(initialValue.date);

  return (
    <Modal index={10}>
      <FormWrapper onSubmit={submitHandler}>
        <TabsWrapper>
          {tabs.map((tab) => (
            <Tab
              value={tab}
              onChange={changeHandler("type")}
              active={tab === state.type}
              key={tab}
            />
          ))}
        </TabsWrapper>
        <Input
          placeholder="0"
          type="number"
          onChange={changeHandler("value")}
        />
        {/* <DatePicker slotProps={{ textField: { size: "small" } }} /> */}
        <ButtonsWrapper>
          <Button variant={ButtonVariants.FILL} callback={enterHandler}>
            enter
          </Button>
          <Button variant={ButtonVariants.OUTLINE} callback={onClose}>
            cancel
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    </Modal>
  );
};

export default AddForm;
