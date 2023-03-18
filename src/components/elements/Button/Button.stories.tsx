import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Component } from './index';
import { ArrowRight2 } from '@itswooble/icons';

export default {
	title: 'Elements',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Button = Template.bind({});

Button.args = {
	children: 'Hello world',
	disabled: false,
	icon: <ArrowRight2 width={24} height={24} color='white' />,
};
