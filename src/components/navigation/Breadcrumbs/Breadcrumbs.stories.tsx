import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Component } from './index';

export default {
	title: 'Navigation',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
	items: [
		{
			label: 'Раздел 1',
			href: '#',
		},
		{
			label: 'Раздел 2',
			href: '#',
		},
		{
			label: 'Раздел 3',
			href: '#',
		},
	],
};
