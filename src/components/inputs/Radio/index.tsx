import React, { MutableRefObject, useRef } from 'react';
import { default as cn } from 'classnames';
import { black, gray300, red } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './Radio';
import BACKGROUND from './background.config';
import styles from './Radio.module.css';

const Radio: React.FC<Props> = ({ className = '', items, errorMessage, color = 'blue300', ...props }) => {
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
							type='radio'
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
				<p className={cn([styles['error-message']], getTypefaces('BodyText_14'))} style={{ color: red }}>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default Radio;
