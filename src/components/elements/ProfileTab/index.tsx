import React from 'react';
import { default as cn } from 'classnames';
import { Colors, blue300, colors, colorsVariants, gray500, white } from '@itswooble/colors';

import { getTypefaces } from '../../typefaces';

import Props from './ProfileTab.props';
import styles from './ProfileTab.module.css';

const ProfileTab: React.FC<Props> = ({ className = '', avatarColor = 'blue300', title, subtitle, avatar, href = '#',
	...props }) => {
	return (
		<div
			className={cn(className, styles.container)}
			onClick={() => window.location.href = href}
			{...props}
		>
			{avatar
				? <img src={avatar} alt={title} className={styles.avatar} />
				: (
					<div
						className={styles.avatar}
						style={{
							backgroundColor: colorsVariants.includes(avatarColor as Colors)
								? colors[avatarColor as Colors]
								: blue300,
						}}
					>
						<p className={getTypefaces('Headline_30')} style={{ color: white }}>
							{title[0]}
						</p>
					</div>
				)
			}

			<p className={getTypefaces('BoldBodyText_14')}>
				{title}
			</p>
			{subtitle && (
				<p className={getTypefaces('BodyText_14')} style={{ color: gray500 }}>
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default ProfileTab;
