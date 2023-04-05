import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	errorMessage?: string;
	color?: Colors | string;
}

export default Props;
