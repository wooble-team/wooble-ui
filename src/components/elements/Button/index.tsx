import React from 'react';
import { default as cn } from 'classnames';
import { colors } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './Button.props';
import styles from './Button.module.css';

const Button: React.FC<Props> = ({ className = '', shape = 'default', variant = 'primary', children, icon, isLoading,
	color = 'black', style = {}, typeface = 'BoldBodyText_16', disabled, ...props }) => {
	return (
		<button
			className={cn(className, styles.common, getTypefaces(typeface), {
				[styles.primary]: variant === 'primary',
				[styles.outlined]: variant === 'outlined',

				[styles.default]: shape === 'default',
				[styles.round]: shape === 'round',
				[styles.circle]: shape === 'circle',

				[styles.disabled]: disabled,
			})}
			style={{
				backgroundColor: variant === 'primary' ? colors[color] : style.backgroundColor,
				color: variant !== 'primary' ? colors[color] : style.color,
				...style,
			}}
			disabled={disabled}
			{...props}
		>
			{children}
			{icon}
		</button>
	);
};

export default Button;
