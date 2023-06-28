import React, { useEffect, useState } from 'react';
import { default as cn } from 'classnames';
import { gray100 } from '@itswooble/colors';

import { ProfileTab } from '../../elements';
import { A, P } from '../../typefaces';

import Props from './Sidebar.props';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<Props> = ({ className = '', items, activeItem = 0, profileTab, logo, logoHref = '/', ...props }) => {
	const ITEM_HEIGHT = 64;

	const [spanPadding, setSpanPadding] = useState(activeItem * ITEM_HEIGHT);

	useEffect(() => {
		setSpanPadding(activeItem * ITEM_HEIGHT);
	}, [activeItem]);

	return (
		<nav className={cn(className, styles.wrapper)} {...props}>
			<div>
				{logo && (
					<A href={logoHref} className={styles.logo}>
						{logo}
					</A>
				)}
				<div className={styles.container}>
					<div
						className={styles.substrate}
						style={{ top: spanPadding, backgroundColor: gray100 }}
					></div>
					<div className={styles.content}>
						{items.map((i, num) => (
							<A
								href={i.href}
								className={styles.item}
								onMouseEnter={() => setSpanPadding(num * ITEM_HEIGHT)}
								onMouseMove={() => setSpanPadding(num * ITEM_HEIGHT)}
								onMouseLeave={() => setSpanPadding(activeItem * ITEM_HEIGHT)}
								key={num}
							>
								<div className={styles.icon}>
									{activeItem === num && i.activeIcon ? i.activeIcon : i.icon}
								</div>
								<P
									variant='BodyText_16'
									color={activeItem === num ? 'black' : 'gray500'}
								>
									{i.label}
								</P>
							</A>
						))}
					</div>
				</div>
			</div>
			{profileTab && <ProfileTab {...profileTab} />}
		</nav>
	);
};

export default Sidebar;
