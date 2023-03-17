import React from 'react';
import { default as cn } from 'classnames';
import { colors } from '@itswooble/colors';

import { getTypefaces } from '../shared/typefaces';

import Props from './P.props';

const P: React.FC<Props> = ({ className = '', variant = 'BodyTextRegular_18', color = 'black', style, children,
	...props }) => {
	return (
		<p
			className={cn(className, getTypefaces(variant))}
			style={{
				color: colors[color],
				...style,
			}}
			{...props}
		>
			{children}
		</p>
	);
};

export default P;
