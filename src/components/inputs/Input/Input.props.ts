import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	errorMessage?: string;
	color?: Colors;
}

export default Props;
