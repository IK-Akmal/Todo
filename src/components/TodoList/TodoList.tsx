import { FC } from "react";
import { ITodo } from "../../model/ITodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

type TodoListPropsType = {
    todos: ITodo[];
}

const TodoList: FC<TodoListPropsType> = ({todos}) => {

    return (
        <ul className={styles.todoList}>
            {
                todos.map(todo =><TodoItem key={todo.id} {...todo}/>)
            }
        </ul>
    )
}

export default TodoList