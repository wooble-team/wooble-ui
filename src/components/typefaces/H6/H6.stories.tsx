import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Component } from './index';

export default {
	title: 'Typefaces',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const H6 = Template.bind({});

H6.args = {
	children: 'Hello world',
	variant: 'BodyTextRegular_18',
};
