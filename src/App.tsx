import { useState } from 'react';
import styles from './App.module.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoControls from './components/TodoControls/TodoControls';
import TodoList from './components/TodoList/TodoList';
import { useTodoContext } from './context/TodoContext';
import { FilterMode } from './model/ITodo';

function App() {
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.All);

  const changeFilterMode = (mode: FilterMode): void => {
    setFilterMode(mode);
  };

  const { state } = useTodoContext();

  const filteredTodos = state.filter((todo) => {
    switch (filterMode) {
      case FilterMode.All: return true;
      case FilterMode.Active: return !todo.status;
      case FilterMode.Completed: return todo.status;
      default:
        throw new Error('нет такого режима');
    }
  });

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>todos</h1>
      </header>
      <main className={styles.main}>
        <AddTodo />
        <TodoList todos={filteredTodos} />
        <TodoControls filterMode={filterMode} changeFilterMode={changeFilterMode} />
      </main>
    </div>
  );
}

export default App;
