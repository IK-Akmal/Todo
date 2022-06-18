import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';

import { ITodo } from '../model/ITodo';

type TodoContextType = {

  state: ITodo[],
  addTodo(text: string): void;
  updateStatus(id: string, status: boolean): void;
  removeTodo(id: string): void;
  removeAllCompletedTodos(): void;
};

export type TodoContexttTypeProps = {
  children: ReactNode
};

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

  const TodoContextProviderValueMemo = useMemo(
    () => ({
      state,
      addTodo,
      updateStatus,
      removeTodo,
      removeAllCompletedTodos,
    }),
    [state],
  );

  return (
    <TodoContext.Provider value={TodoContextProviderValueMemo}>
      {children}
    </TodoContext.Provider>
  );
};
