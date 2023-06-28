import React from 'react';
import { default as cn } from 'classnames';
import { colors, gray500 } from '@itswooble/colors';

import { A } from '../../typefaces';

import Props from './Breadcrumbs.props';
import styles from './Breadcrumbs.module.css';
import ArrowRightIcon from './ic_arrowRight.svg';

const Breadcrumbs: React.FC<Props> = ({ className = '', items, activeColor = 'blue300', ...props }) => {
	return (
		<div className={cn(className, styles.container)} {...props}>
			{items.map((i, num) => (
				<>
					<A
						key={num}
						href={i.href}
						variant='BodyText_14'
						color={num + 1 !== items.length ? 'gray500' : activeColor}
					>
						{i.label}
					</A>
					{num + 1 !== items.length && (
						<ArrowRightIcon
							key={num + '_svg'}
							stroke={num + 2 !== items.length ? gray500 : colors[activeColor]} />
					)}
				</>
			))}
		</div>
	);
};

export default Breadcrumbs;
