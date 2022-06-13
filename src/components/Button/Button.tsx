import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from "./Button.module.css";
import cn from "classnames";

const Button: FC<ButtonProps> = ({ active, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className, {
            [styles.active]: active
        })} {...props}>
            {children}
        </button>
    )
}

export default Button;