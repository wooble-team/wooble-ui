import { Colors } from '@itswooble/colors';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	subtitle?: string;
	avatar?: string;
	avatarColor?: Colors;
	href?: string;
}

export default Props;
