import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../lib';
import { Rb_Button } from '../lib';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    isAction: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 4.8,
    priceText: '₹59 / 7 days',
    isAction: true,
  },

  render: (args) => (
    <ProductCard {...args}>
      <Rb_Button>Rent Now</Rb_Button>
    </ProductCard>
  ),
};

export const LoggedOut: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 4.8,
    priceText: '₹59 / 7 days',
    isAction: true,
  },

  render: (args) => (
    <ProductCard {...args}>
      <Rb_Button>Login</Rb_Button>
    </ProductCard>
  ),
};

export const WithoutRating: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    priceText: '₹99 / 7 days',
    isAction: true,
  },

  render: (args) => (
    <ProductCard {...args}>
      <Rb_Button>Rent Now</Rb_Button>
    </ProductCard>
  ),
};

export const LowRating: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title: 'Some Book',
    author: 'Unknown Author',
    rating: 1.5,
    priceText: '₹39 / 7 days',
    isAction: true,
  },

  render: (args) => (
    <ProductCard {...args}>
      <Rb_Button>Rent Now</Rb_Button>
    </ProductCard>
  ),
};

export const LongTitle: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title:
      'The Complete Guide to Building Modern React Applications with TypeScript',
    author: 'John Doe',
    rating: 4.9,
    priceText: '₹129 / 7 days',
    isAction: true,
  },

  render: (args) => (
    <ProductCard {...args}>
      <Rb_Button>Rent Now</Rb_Button>
    </ProductCard>
  ),
};

export const WithoutAction: Story = {
  args: {
    imageUrl: 'https://picsum.photos/250/350',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 4.8,
    priceText: '₹59 / 7 days',
    isAction: false,
  },
};