import React, { MutableRefObject, useRef } from 'react';
import { default as cn } from 'classnames';
import { black, gray300, red } from '@itswooble/colors';

import { P, getTypefaces } from '../../typefaces';

import Props from './Checkbox';
import BACKGROUND from './background.config';
import styles from './Checkbox.module.css';

const Checkbox: React.FC<Props> = ({ className = '', items, errorMessage, color = 'blue300', ...props }) => {
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	return (
		<>
			<div className={cn(className, styles.container)}>
				{items.map((i, num) => (
					<div
						key={num}
						className={styles.item}
						style={{
							borderColor: errorMessage ? red : gray300,
						}}
					>
						<input
							ref={inputRef}
							type='checkbox'
							className={styles.input}
							id={i.value}
							style={{
								['--background' as any]: errorMessage
									? `url("${BACKGROUND['red']}")`
									: `url("${BACKGROUND[color]}")`,
							}}
							value={i.value}
							{...props} />
						<label
							htmlFor={i.value}
							className={getTypefaces('BodyText_16')}
							style={{
								color: errorMessage ? red : black,
							}}
						>
							{i.label}
						</label>
					</div>
				))}
			</div>
			{errorMessage && (
				<P variant='BodyText_14' color='red' className={styles['error-message']}>
					{errorMessage}
				</P>
			)}
		</>
	);
};

export default Checkbox;
