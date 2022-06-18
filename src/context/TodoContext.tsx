import {
  createContext, FC, ReactNode, useContext, useState,
} from 'react';
import { ITodo } from '../model/ITodo';

type TodoContextType = {

    state: ITodo[],
    addTodo(text: string): void;
    updateStatus(id: string, status: boolean): void;
    removeTodo(id: string): void;
    removeAllCompletedTodos(): void;
}

type TodoContexttTypeProps = {
    children?: ReactNode
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = () => useContext(TodoContext) as TodoContextType;

export const TodoContextProvider: FC<TodoContexttTypeProps> = ({ children }) => {
  const [state, setState] = useState<ITodo[]>([]);

  function addTodo(text: string): void {
    const newTodo: ITodo = {
      id: Math.random().toString(), // временно
      status: false,
      text,
    };
    setState((pre) => [newTodo, ...pre]);
  }
  function updateStatus(id: string, status: boolean): void {
    setState(
      state.map((todo) => (todo.id === id
        ? { ...todo, status } as ITodo
        : todo)),
    );
  }
  function removeTodo(id: string): void {
    setState(state.filter((todo) => todo.id !== id));
  }

  function removeAllCompletedTodos(): void {
    setState(state.filter((todo) => !todo.status));
  }

  return (
    <TodoContext.Provider value={{
      state, addTodo, updateStatus, removeTodo, removeAllCompletedTodos,
    }}
    >
      {children}
    </TodoContext.Provider>
  );
};
