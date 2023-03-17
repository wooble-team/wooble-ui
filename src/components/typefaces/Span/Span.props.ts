import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

import { Typefaces } from '../shared/typefaces';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	variant?: Typefaces;
	color?: Colors;
}

export default Props;
