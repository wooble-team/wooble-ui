import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { gray100, white } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './SwitchMenu.props';
import styles from './SwitchMenu.module.css';

const SwitchMenu: React.FC<Props> = ({ className = '', items, onItemChanged = () => null, defaultValue }) => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	const [selectedItem, setSelectedItem] = useState(defaultValue || items[0].value);

	const [menuWidth, setMenuWidth] = useState(0);

	useEffect(() => {
		setMenuWidth(ref.current.offsetWidth);
	}, []);

	return(
		<div
			ref={ref}
			className={cn(className, styles.wrapper)}
			style={{
				background: gray100,
			}}
		>
			<div 
				className={styles.container}
				style={{ 
					gridTemplateColumns: `repeat(${items.length}, 1fr)`,
				}} 
			>
				{items.map((item, i)=>{
					return(
						<button
							key={i} 
							onClick={() => {
								setSelectedItem(item.value);
								onItemChanged(item);
							}}
							className={cn(styles.item, getTypefaces('BodyText_14'))}
						>
							{item.label}
						</button>
					);
				})}
			</div>
			<div 
				className={styles.substrate}
				style={{ 
					width: (menuWidth - 6) / items.length,
					left: ((menuWidth - 6) / items.length) * items.findIndex((value) => value.value === selectedItem) + 3,

					background: white,
				}} />
		</div>
	);
};

export default SwitchMenu;
