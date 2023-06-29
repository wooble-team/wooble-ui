import { Colors } from '@itswooble/colors';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	content: number | 'left' | 'right';
	activeColor?: Colors;
	isActive?: boolean;
};

export default Props;
