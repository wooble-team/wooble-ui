import React from 'react';
import { default as cn } from 'classnames';
import { colors } from '@itswooble/colors';

import { getTypefaces } from '../shared/typefaces';

import Props from './H1.props';

const H1: React.FC<Props> = ({ className = '', variant = 'BodyTextRegular_18', color = 'black', style, children, ...props }) => {
	return (
		<h1
			className={cn(className, getTypefaces(variant))}
			style={{
				color: colors[color],
				...style,
			}}
			{...props}
		>
			{children}
		</h1>
	);
};

export default H1;
