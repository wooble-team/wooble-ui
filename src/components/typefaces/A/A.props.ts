import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { Colors } from '@itswooble/colors';

import { Typefaces } from '../shared/typefaces';

interface Props extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	variant?: Typefaces;
	color?: Colors;
}

export default Props;
