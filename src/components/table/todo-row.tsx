import { Tr, Td, Input } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { Button } from "../button";
import { Todo, useTodoStore } from "../../store/todo";

type TodoRowProps = {
  todo: Todo;
  index: number;
};

export function TodoRow({ todo, index }: TodoRowProps) {
  const { editTodo, removeTodo } = useTodoStore();
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setInput(e.target.value);

  const handleOnEdit = (todo: Todo) => {
    setIsEditMode((isEditMode) => !isEditMode);
    setInput(todo.title);
    editTodo(todo.id, input);
  };

  return (
    <Tr key={todo.id.toString()}>
      <Td>{index + 1}</Td>
      <Td>
        {isEditMode ? (
          <Input type="text" value={input} onChange={handleInputChange} />
        ) : (
          todo.title
        )}
      </Td>
      <Td>
        <Button onClick={() => handleOnEdit(todo)}>Edit</Button>
        <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
      </Td>
    </Tr>
  );
}
