import React, { useState } from 'react';
import { default as cn } from 'classnames';
import { black, gray300 } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './TabsMenu.props';
import styles from './TabsMenu.module.css';

const TabsMenu: React.FC<Props> = ({ className = '', items, defaultValue, onItemChanged = () => undefined, ...props }) => {
	const [selectedTab, setSelectedTab] = useState(defaultValue || items[0].value);

	return (
		<div className={cn(className, styles.container)} {...props}>
			{items.map((i, num) => (
				<button
					key={num}
					className={getTypefaces('Headline_24')}
					style={{
						color: selectedTab === i.value ? black : gray300,
					}}
					onClick={() => {
						setSelectedTab(i.value);
						onItemChanged(i);
					}}
				>
					{i.label}
				</button>
			))}
		</div>
	);
};

export default TabsMenu;
