import { ChangeEvent, FC } from 'react';
import { ITodo } from '../../model/ITodo';
import styles from "./TodoItem.module.css";
import cn from "classnames";
import { useTodoContext } from '../../context/TodoContext';
import Checkbox from '../Checkbox/Checkbox';

const TodoItem: FC<ITodo> = ({ status: complete, id, text }) => {

    const { updateStatus } = useTodoContext();
    const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        updateStatus(id, e.target.checked);
    }


    return (
        <li className={styles.todoItem}>
            <Checkbox checked={complete} onChange={handleChangeStatus} />
            <span className={cn(styles.text, {
                [styles.completed]: complete
            })}>
                {text}
            </span>
        </li>
    )
}

export default TodoItem