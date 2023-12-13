import "./App.css";
import { TodoForm } from "./components/form/todo-form";
import TodoTable from "./components/table/todo-table";

function App() {
  return (
    <>
      <TodoForm />
      <TodoTable />
    </>
  );
}

export default App;
