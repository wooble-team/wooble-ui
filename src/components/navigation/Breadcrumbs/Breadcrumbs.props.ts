import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: IBreadCrumbsItem[];
	activeColor?: Colors;
}

interface IBreadCrumbsItem {
	label: string;
	href: string;
}

export default Props;

export type {
	IBreadCrumbsItem,
};
