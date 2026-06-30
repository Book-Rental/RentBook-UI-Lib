import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Rating from '../lib/components/atoms/Rb_Rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: 'color',
    },
    emptyColor: {
      control: 'color',
    },
    readOnly: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};

export const FiveStars: Story = {
  args: {
    value: 5,
  },
};

export const Large: Story = {
  args: {
    value: 4,
    size: 32,
  },
};

export const CustomColors: Story = {
  args: {
    value: 3,
    color: '#f97316',
    emptyColor: '#d1d5db',
  },
};

export const TenStars: Story = {
  args: {
    value: 7,
    max: 10,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [rating, setRating] = useState(args.value);

    return (
      <Rating
        {...args}
        value={rating}
        onChange={setRating}
      />
    );
  },
  args: {
    value: 2,
    readOnly: false,
  },
};

export const HalfStar: Story = {
  args: {
    value: 4.5,
  },
};