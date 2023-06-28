import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Colors } from '@itswooble/colors';

import { Typefaces } from '../../typefaces';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: 'primary' | 'outlined' | 'text';
	isLoading?: boolean;
	icon?: ReactNode;
	shape?: 'default' | 'round' | 'circle';
	color?: Colors;
	typeface?: Typefaces;
};

export default Props;
