import React, { useMemo } from 'react';
import { default as cn } from 'classnames';
import { Colors, colors, colorsVariants } from '@itswooble/colors';
import { Loading } from '@itswooble/icons';

import { getTypefaces } from '../../typefaces';

import Props from './Button.props';
import styles from './Button.module.css';

const Button: React.FC<Props> = ({ className = '', shape = 'default', variant = 'primary', children, icon, isLoading,
	color = 'black', style = {}, typeface = 'BoldBodyText_16', disabled, ...props }) => {
	const buttonColor = useMemo(() => {
		if(colorsVariants.includes(color as Colors))
			return(colors[color as Colors]);
		else
			return(color);
	}, [color]);
	
	return (
		<button
			className={cn(className, styles.common, getTypefaces(typeface), {
				[styles.primary]: variant === 'primary',
				[styles.outlined]: variant === 'outlined',

				[styles.default]: shape === 'default',
				[styles.round]: shape === 'round',
				[styles.circle]: shape === 'circle',

				[styles.disabled]: disabled || isLoading,

				[styles.iconOnly]: !children,
			})}
			style={{
				backgroundColor: variant === 'primary' ? buttonColor : style.backgroundColor,
				color: variant !== 'primary' ? buttonColor : style.color,
				...style,
			}}
			disabled={disabled}
			{...props}
		>
			{children}
			{isLoading ? <Loading style={{ fill: 'white' }} width={24} height={24} /> : icon}
		</button>
	);
};

export default Button;
