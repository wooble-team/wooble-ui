import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	count: number;
	active: number;
	activeColor?: Colors;
	onActiveChange?: (active: number) => void;
};

export default Props;
