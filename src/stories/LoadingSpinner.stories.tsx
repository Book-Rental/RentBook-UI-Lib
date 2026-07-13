import type { Meta, StoryObj } from '@storybook/react';
import Rb_LoadingSpinner from '../lib/components/atoms/Rb_LoadingSpinner';

const meta: Meta<typeof Rb_LoadingSpinner> = {
  title: 'Atoms/Loading Spinner',
  component: Rb_LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_LoadingSpinner>;

export const Default: Story = {
  args: {
    text: 'Loading...',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    text: 'Loading...',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    text: 'Please wait...',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    text: 'Loading book details...',
    size: 'lg',
  },
};

export const WithoutText: Story = {
  args: {
    text: '',
    size: 'lg',
  },
};

export const CustomBackground: Story = {
  args: {
    text: 'Fetching data...',
    size: 'lg',
    className: 'bg-gray-50',
  },
};