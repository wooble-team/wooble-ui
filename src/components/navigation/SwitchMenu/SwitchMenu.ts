import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: IItem[],
	onItemChanged?: (newValue: IItem) => void;
	defaultValue?: string,
}

interface IItem {
	label: string;
	value: string;
}

export default Props;
