/* eslint-disable react/jsx-props-no-multi-spaces */
import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({
  active, className, children, ...props
}) => (
  <button
    className={cn(styles.button, className, {
      [styles.active]: active,
    })}
    type="button"
    {...props}
  >
    {children}
  </button>
);

export default Button;
