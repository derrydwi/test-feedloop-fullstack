import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { Button } from "../button";
import { useTodoStore } from "../../store/todo";

export function TodoForm() {
  const { addTodo } = useTodoStore();
  const [input, setInput] = useState("");

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setInput(e.target.value);

  const isError = !input.length;

  const onSubmit = () => {
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Title</FormLabel>
      <Input type="text" value={input} onChange={handleInputChange} />
      {isError && <FormErrorMessage>Title is required.</FormErrorMessage>}
      <Button onClick={onSubmit}>Submit</Button>
    </FormControl>
  );
}
