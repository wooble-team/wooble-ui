import React, { useMemo } from 'react';
import { default as cn } from 'classnames';

import PaginationItem from './PaginationItem';

import Props from './Pagination.props';
import styles from './Pagination.module.css';

const Pagination: React.FC<Props> = ({ className = '', count, active, activeColor, onActiveChange = () => null, ...props }) => {
	const numberButtons = useMemo(() => {
		const buttons = [];

		const from = active - 2 - (count - active < 2 ? 2 - count + active : 0); 
		const to = active + 2;

		for(let i = 1; i <= count; i++) {
			if(i >= from && i <= to) {
				buttons.push(
					<PaginationItem
						key={i}
						content={i}
						isActive={i === active}
						activeColor={activeColor}
						onClick={() => onActiveChange(i)} />
				);
			}
		}

		return buttons;
	}, [count, active, activeColor]);

	return (
		<div className={cn(className, styles.container)} {...props}>
			<PaginationItem
				className={styles['left-block']}
				content='left'
				onClick={() => onActiveChange(active !== 1 ? active - 1 : active)} />
			{numberButtons}
			<PaginationItem
				className={styles['right-block']}
				content='right'
				onClick={() => onActiveChange(active !== count ? active + 1 : active)} />
		</div>
	);
};

export default Pagination;
