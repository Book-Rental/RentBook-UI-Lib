import type { Meta, StoryObj } from '@storybook/react';
import Rb_Label from '../lib/components/atoms/Rb_Label';


const meta: Meta<typeof Rb_Label> = {
  title: 'Components/Label',
  component: Rb_Label,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Label>;

export const Default: Story = {
  args: {
    htmlFor: 'name',
    children: 'Full Name',
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'email',
    children: 'Email Address',
    required: true,
  },
};

export const CustomStyle: Story = {
  args: {
    htmlFor: 'username',
    children: 'Username',
    className: 'text-blue-600 font-semibold',
  },
};