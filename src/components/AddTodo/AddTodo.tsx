import { ChangeEvent, useState, KeyboardEvent } from 'react';

import { useTodoContext } from '../../context/TodoContext';

import styles from './AddTodo.module.css';

const AddTodo = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const { addTodo } = useTodoContext();

  const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value.trim().length > 0) { addTodo(value); }
      setValue('');
    }
  };

  return (
    <div className={styles.addTodo}>
      <span className={styles.arrowdown} />
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={handleChange}
        onKeyDown={handleAddTodo}
      />
    </div>
  );
};

export default AddTodo;
