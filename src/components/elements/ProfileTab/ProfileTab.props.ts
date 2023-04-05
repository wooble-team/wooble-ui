import { Colors } from '@itswooble/colors';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	subtitle?: string;
	avatar?: string;
	avatarColor?: Colors | string;
	href?: string;
}

export default Props;
