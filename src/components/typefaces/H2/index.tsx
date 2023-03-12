import React from 'react';
import { default as cn } from 'classnames';
import { colors } from '@itswooble/colors';

import { getTypefaces } from '../shared/typefaces';

import Props from './H2.props';

const H2: React.FC<Props> = ({ className = '', variant = 'BodyTextRegular_18', color = 'black', style, children, ...props }) => {
	return (
		<h2
			className={cn(className, getTypefaces(variant))}
			style={{
				color: colors[color],
				...style,
			}}
			{...props}
		>
			{children}
		</h2>
	);
};

export default H2;
