import { default as cn } from 'classnames';

import styles from './typefaces.module.css';

export type Typefaces = 'Headline_42' | 'Headline_36' | 'Headline_30' | 'Headline_24' | 'Headline_20'
	| 'BoldBodyText_18' | 'BodyTextRegular_18' | 'BodyText_18' | 'BoldBodyText_16' | 'BodyTextRegular_16' | 'BodyText_16'
	| 'BoldBodyText_14' | 'BodyTextRegular_14' | 'BodyText_14' | 'BoldBodyText_12' | 'BodyTextRegular_12' | 'BodyText_12';

export function getTypefaces(name: Typefaces): string {
	return cn({
		[styles.Headline_42]: name === 'Headline_42',
		[styles.Headline_36]: name === 'Headline_36',
		[styles.Headline_30]: name === 'Headline_30',
		[styles.Headline_24]: name === 'Headline_24',
		[styles.Headline_20]: name === 'Headline_20',
		
		[styles.BoldBodyText_18]: name === 'BoldBodyText_18',
		[styles.BodyTextRegular_18]: name === 'BodyTextRegular_18',
		[styles.BodyText_18]: name === 'BodyText_18',

		[styles.BoldBodyText_16]: name === 'BoldBodyText_16',
		[styles.BodyTextRegular_16]: name === 'BodyTextRegular_16',
		[styles.BodyText_16]: name === 'BodyText_16',

		[styles.BoldBodyText_14]: name === 'BoldBodyText_14',
		[styles.BodyTextRegular_14]: name === 'BodyTextRegular_14',
		[styles.BodyText_14]: name === 'BodyText_14',

		[styles.BoldBodyText_12]: name === 'BoldBodyText_12',
		[styles.BodyTextRegular_12]: name === 'BodyTextRegular_12',
		[styles.BodyText_12]: name === 'BodyText_12',
	});
}
