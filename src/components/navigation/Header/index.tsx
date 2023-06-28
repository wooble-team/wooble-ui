import React from 'react';
import { default as cn } from 'classnames';

import { ProfileTab } from '../../elements';
import { A, P } from '../../typefaces';

import Props from './Header.props';
import styles from './Header.module.css';

const Header: React.FC<Props> = ({ className = '', items, activeItem, logo, logoHref, profileTab, ...props }) => {
	return (
		<header
			className={cn(className, styles.wrapper)}
			{...props}
		>
			{logo && (
				<A href={logoHref} className={styles.logo}>
					{logo}
				</A>
			)}
			<nav className={styles.container}>
				{items.map((i, num) => (
					<A
						href={i.href}
						key={num}
						className={styles.item}
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
			</nav>
			{profileTab && <ProfileTab {...profileTab} />}
		</header>
	);
};

export default Header;
