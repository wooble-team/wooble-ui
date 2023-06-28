import React, { MutableRefObject, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { black, colors, gray300, red } from '@itswooble/colors';

import { P } from '../../typefaces';

import Props from './Input.props';
import styles from './Input.module.css';

const Input: React.FC<Props> = ({ className = '', color = 'blue300', errorMessage, placeholder, value, onFocus = () => undefined,
	onBlur = () => undefined, onChange = () => undefined, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [localValue, setLocalValue] = useState(value);

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>; 

	function getBorder() {
		if(isFocused)
			return colors[color];
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
				<P
					className={cn(styles.placeholder, {
						[styles['placeholder-focused']]: isFocused || value || localValue,
					})}
					color={errorMessage ? 'red' : 'gray500'}
				>
					{placeholder}
				</P>
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
					className={styles.input}
					style={{
						color: black,
					}}
					{...props} />
			</div>
			{errorMessage && (
				<P variant='BodyText_14' color='red' className={styles['error-message']}>
					{errorMessage}
				</P>
			)}
		</>
	);
};

export default Input;
