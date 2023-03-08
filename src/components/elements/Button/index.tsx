import React from 'react';
import { default as cn } from 'classnames';

import Props from './Button.props';

import styles from './Button.module.css';

const Button: React.FC<Props> = ({ className = '', children, ...props }) => {
	return (
		<button className={cn(className, styles.button)} {...props}>
			{children}
		</button>
	);
};

export default Button;
