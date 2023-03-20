import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Component } from './index';

export default {
	title: 'Navigation',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const SwitchMenu = Template.bind({});

SwitchMenu.args = {
	items: [
		{
			label: 'Search',
			value: 'Search',
		},
		{
			label: 'Profile',
			value: 'Profile',
		},
		{
			label: 'Cart',
			value: 'Cart',
		},
	],
};
