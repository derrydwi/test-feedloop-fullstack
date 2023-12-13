import { create } from "zustand";

export type Todo = {
  id: Date;
  title: string;
};

export type TodoState = {
  todos: Todo[];
  addTodo: (newTodo: string) => void;
  editTodo: (id: Date, newTodo: string) => void;
  removeTodo: (id: Date) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (newTodo: string) =>
    set((state: TodoState) => ({
      todos: [...state.todos, { id: new Date(), title: newTodo }],
    })),
  editTodo: (id: Date, newTodo) =>
    set((state: TodoState) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTodo } : todo
      ),
    })),
  removeTodo: (id: Date) => {
    set((state: TodoState) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
