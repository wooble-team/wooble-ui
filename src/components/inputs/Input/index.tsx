import React, { MutableRefObject, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { black, Colors, colors, colorsVariants, gray300, gray500, red } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './Input.props';
import styles from './Input.module.css';

const Input: React.FC<Props> = ({ className = '', color = 'blue300', errorMessage, placeholder, value, onFocus = () => undefined,
	onBlur = () => undefined, onChange = () => undefined, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [localValue, setLocalValue] = useState(value);

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>; 

	function getBorder() {
		if(isFocused)
			return colorsVariants.includes(color as Colors) ? colors[color as Colors] : color;
		else if(errorMessage)
			return red;
		else
			return gray300;
	}

	return (
		<>
			<div
				className={cn(className, styles.container)}
				style={{
					borderColor: getBorder(),
				}}
				onClick={() => {
					setIsFocused(true);

					inputRef.current?.click();
					inputRef.current?.focus();
				}}
			>
				<p
					className={cn(className, styles.placeholder, {
						[styles['placeholder-focused']]: isFocused || value || localValue,
					})}
					style={{
						color: errorMessage ? red : gray500,
					}}
				>
					{placeholder}
				</p>
				<input
					ref={inputRef}
					onFocus={(e) => {
						setIsFocused(true);
						onFocus(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						onBlur(e);
					}}
					onChange={(e) => {
						setLocalValue(e.target.value);
						onChange(e);
					}}
					value={value}
					className={cn(className, styles.input)}
					style={{
						color: black,
					}}
					{...props} />
			</div>
			{errorMessage && (
				<p className={cn([styles['error-message']], getTypefaces('BodyText_14'))} style={{ color: red }}>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default Input;
