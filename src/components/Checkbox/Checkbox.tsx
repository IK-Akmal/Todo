import { FC } from 'react';
import cn from 'classnames';

import { CheckboxProps } from './Checkbox.props';
import styles from './Checkbox.module.css';

const Checkbox: FC<CheckboxProps> = ({ className, id, ...props }) => (
  <label htmlFor={id} className={styles.container}>
    <input id={id} className={cn(styles.input, className)} type="checkbox" {...props} />
    <span className={styles.checkmark} />
  </label>
);

export default Checkbox;
