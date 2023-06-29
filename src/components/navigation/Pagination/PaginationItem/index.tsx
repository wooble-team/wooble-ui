import React from 'react';
import { default as cn } from 'classnames';
import { ArrowLeft2, ArrowRight2 } from '@itswooble/icons';
import { colors, gray300 } from '@itswooble/colors';

import { P } from '../../../typefaces';

import Props from './PaginationItem.props';
import styles from './PaginatonItem.module.css';

const PaginationItem: React.FC<Props> = ({ className = '', content, activeColor = 'blue300', isActive, ...props }) => {
	function getContent() {
		switch(content) {
			case 'left':
				return <ArrowLeft2 color='gray600' />;
			case 'right':
				return <ArrowRight2 color='gray600' />;
			default:
				return (
					<P variant='BoldBodyText_16' color={isActive ? activeColor : 'gray600'}>
						{content}
					</P>
				);
		}
	}

	return (
		<button
			className={cn(className, styles.container)}
			style={{
				borderColor: isActive ? colors[activeColor] : gray300,
			}}
			{...props}
		>
			{getContent()}
		</button>
	);
};

export default PaginationItem;
