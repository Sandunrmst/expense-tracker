import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modalbody,
  FormControl,
  Input,
  RadioGroup,
  Radio,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const TransactionForm = () => {
  return (
    <Modal>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <Modalbody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="Description"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
              />
            </FormControl>
            <RadioGroup mt="5">
              <Radio value="income" colorScheme="blue" name="type">
                Income
              </Radio>
              <Radio value="expense" colorScheme="red" name="type">
                Expense
              </Radio>
            </RadioGroup>
          </Modalbody>
          <ModalFooter>
            <Button mr={"4"}>Cancel</Button>
            <Button>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransactionForm;
