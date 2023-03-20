import React from 'react';
import { default as cn } from 'classnames';
import { black, gray500 } from '@itswooble/colors';

import { ProfileTab } from '../../elements';
import { getTypefaces } from '../../typefaces';

import Props from './Header.props';
import styles from './Header.module.css';

const Header: React.FC<Props> = ({ className = '', items, activeItem, logo, logoHref, profileTab, ...props }) => {
	return (
		<header
			className={cn(className, styles.wrapper)}
			{...props}
		>
			{logo && (
				<a href={logoHref} className={styles.logo}>
					{logo}
				</a>
			)}
			<nav className={styles.container}>
				{items.map((i, num) => (
					<a
						href={i.href}
						key={num}
						className={styles.item}
					>
						<div className={styles.icon}>
							{activeItem === num && i.activeIcon ? i.activeIcon : i.icon}
						</div>
						<p
							className={getTypefaces('BodyText_16')}
							style={{ color: activeItem === num ? black : gray500 }}
						>
							{i.label}
						</p>
					</a>
				))}
			</nav>
			{profileTab && <ProfileTab {...profileTab} />}
		</header>
	);
};

export default Header;
