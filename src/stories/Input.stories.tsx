import type { Meta, StoryObj } from '@storybook/react';
import Rb_Input from '../lib/components/atoms/Rb_Input';


const meta: Meta<typeof Rb_Input> = {
  title: 'Components/Input',
  component: Rb_Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name',
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  args: {
    type: 'text',
    value: 'John Doe',
    readOnly: true,
  },
};