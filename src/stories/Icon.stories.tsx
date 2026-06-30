import type { Meta, StoryObj } from '@storybook/react';
import {
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaBook,
} from 'react-icons/fa';

import Icon from '../lib/components/atoms/Rb_Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Search: Story = {
  args: {
    icon: FaSearch,
    size: 20,
  },
};

export const Heart: Story = {
  args: {
    icon: FaHeart,
    size: 24,
    color: 'red',
  },
};

export const User: Story = {
  args: {
    icon: FaUser,
    size: 28,
    color: '#2563eb',
  },
};

export const Cart: Story = {
  args: {
    icon: FaShoppingCart,
    size: 30,
    color: '#16a34a',
  },
};

export const Book: Story = {
  args: {
    icon: FaBook,
    size: 32,
    color: '#9333ea',
  },
};