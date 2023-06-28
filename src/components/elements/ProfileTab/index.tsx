import React from 'react';
import { default as cn } from 'classnames';
import { colors } from '@itswooble/colors';

import { P } from '../../typefaces';

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
							backgroundColor: colors[avatarColor],
						}}
					>
						<P variant='Headline_30' color='white'>
							{title[0]}
						</P>
					</div>
				)
			}

			<P variant='BoldBodyText_14'>
				{title}
			</P>
			{subtitle && (
				<P variant='BodyText_14' color='gray500'>
					{subtitle}
				</P>
			)}
		</div>
	);
};

export default ProfileTab;
