import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
