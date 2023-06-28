import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Component } from './index';

export default {
	title: 'Inputs',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
	items: [
		{
			label: 'Dog',
			value: 'dog',
		},
		{
			label: 'Cat',
			value: 'cat',
		},
		{
			label: 'Bird',
			value: 'bird',
		},
	],
	name: 'form',
};
