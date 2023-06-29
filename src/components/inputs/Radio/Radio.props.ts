import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface IRadioItem {
	label: string;
	value: string;
}

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	items: IRadioItem[];
	errorMessage?: string;
	name: string;
	color?: Colors;
}

export default Props;
