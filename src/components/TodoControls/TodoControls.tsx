import { FC } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { FilterMode } from '../../model/ITodo';
import Button from '../Button/Button';
import styles from "./TodoControls.module.css";
import cn from "classnames";
type TodoControlsTypeProps = {
    changeFilterMode: (mode: FilterMode) => void
    filterMode: FilterMode
}

const TodoControls: FC<TodoControlsTypeProps> = ({ changeFilterMode, filterMode }) => {

    const { state, removeAllCompletedTodos } = useTodoContext();
    const activeLength = state.filter(todo => !todo.status).length;

    const stateMessage = activeLength > 0 ?
        `${activeLength} ${activeLength > 1 ? "items" : "item"} left`
        :
        state.length > 0 ?
            "All is done"
            :
            "List is empty"

    return (
        <>
            <div className={styles.todoControls}>
                <span>{stateMessage}</span>
                <div className={styles.btnFilterWrapper}>
                    <Button
                        onClick={() => changeFilterMode(FilterMode.All)}
                        active={filterMode === FilterMode.All}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => changeFilterMode(FilterMode.Active)}
                        active={filterMode === FilterMode.Active}
                    >
                        Active
                    </Button>
                    <Button
                        onClick={() => changeFilterMode(FilterMode.Completed)}
                        active={filterMode === FilterMode.Completed}
                    >
                        Completed
                    </Button>
                </div>
                <Button onClick={removeAllCompletedTodos}>Clear completed</Button>
            </div>
            <div className={cn(styles.stack, styles.stackFirst)}></div>
            <div className={cn(styles.stack, styles.stackSecond)}></div>
        </>
    )
}

export default TodoControls