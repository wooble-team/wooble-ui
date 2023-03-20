import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaperFail, Buy } from '@itswooble/icons';

import { default as Component } from './index';

export default {
	title: 'Navigation',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Header = Template.bind({});

Header.args = {
	items: [
		{
			label: 'Search',
			href: '#',
			icon: <PaperFail color='gray500' />,
			activeIcon: <PaperFail color='blue300' />,
		},
		{
			label: 'Profile',
			href: '#',
			icon: <Buy color='gray500' />,
			activeIcon: <Buy color='blue300' />,
		},
		{
			label: 'Cart',
			href: '#',
			icon: <PaperFail color='gray500' />,
			activeIcon: <PaperFail color='blue300' />,
		},
	],
	activeItem: 0,
	logo: 'Logo',
	profileTab: {
		title: 'Name Surname',
		subtitle: 'example@mail.ru',
	},
};
