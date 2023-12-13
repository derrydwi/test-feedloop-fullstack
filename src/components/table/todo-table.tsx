import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { useTodoStore } from "../../store/todo";

import { TodoRow } from "./todo-row";

export default function TodoTable() {
  const { todos } = useTodoStore();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Title</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo, index) => (
            <TodoRow key={todo.id.toString()} todo={todo} index={index} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
