import { ChangeEvent, FC } from 'react';
import cn from 'classnames';

import { useTodoContext } from '../../context/TodoContext';
import Checkbox from '../Checkbox/Checkbox';

import styles from './TodoItem.module.css';
import { TodoItemProps } from './TodoItem.props';

const TodoItem: FC<TodoItemProps> = ({ status: complete, id, text }) => {
  const { updateStatus } = useTodoContext();
  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    updateStatus(id, e.target.checked);
  };

  return (
    <li className={styles.todoItem}>
      <Checkbox id={id} checked={complete} onChange={handleChangeStatus} />
      <span className={cn(styles.text, {
        [styles.completed]: complete,
      })}
      >
        {text}
      </span>
    </li>
  );
};

export default TodoItem;
