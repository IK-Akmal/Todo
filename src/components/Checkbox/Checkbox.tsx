import { FC } from 'react'
import { CheckboxProps } from './Checkbox.props';
import cn from "classnames";
import styles from "./Checkbox.module.css";

const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => {
    return (
        <label className={styles.container}>
            <input className={cn(styles.input, className)} type="checkbox" {...props} />
            <span className={styles.checkmark}></span>
        </label>
    )
}

export default Checkbox;