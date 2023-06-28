import React, { MutableRefObject, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { black, colors, gray300, red } from '@itswooble/colors';

import { P } from '../../typefaces';

import Props from './Textarea.props';
import styles from './Textarea.module.css';

const Textarea: React.FC<Props> = ({ className = '', color = 'blue300', errorMessage, placeholder, value,
	onFocus = () => undefined, onBlur = () => undefined, onChange = () => undefined, onInput = () => undefined, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [localValue, setLocalValue] = useState(value);
	const [textareaHeight, setTextareaHeight] = useState(40);

	const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>; 

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

					textareaRef.current?.click();
					textareaRef.current?.focus();
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
				<textarea
					ref={textareaRef}
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
					onInput={(e) => {
						onInput(e);
						setTextareaHeight(textareaRef.current.scrollHeight);
					}}
					value={value}
					className={styles.textarea}
					style={{
						color: black,
						height: textareaHeight,
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

export default Textarea;
