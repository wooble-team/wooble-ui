import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { default as ProfileTabProps } from '../../elements/ProfileTab/ProfileTab.props';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: ISidebarItem[];
	activeItem?: number;
	logo?: ReactNode;
	logoHref?: string;
	profileTab?: ProfileTabProps;
}

interface ISidebarItem {
	icon: ReactNode;
	activeIcon?: ReactNode;
	label: string;
	href: string;
}

export default Props;
