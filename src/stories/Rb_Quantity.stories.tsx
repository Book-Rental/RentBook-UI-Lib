import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Rb_Quantity from '../lib/components/molecules/Rb_Quantity';

const meta: Meta<typeof Rb_Quantity> = {
  title: 'Molecules/Quantity',
  component: Rb_Quantity,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum allowed quantity',
    },

    max: {
      control: 'number',
      description: 'Maximum allowed quantity',
    },

    disabled: {
      control: 'boolean',
    },

    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Quantity>;

const QuantityWrapper = (
  args: React.ComponentProps<typeof Rb_Quantity>
) => {

  const [quantity, setQuantity] = useState(args.value);

  return (
    <Rb_Quantity
      {...args}
      value={quantity}
      onChange={setQuantity}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <QuantityWrapper {...args}/>
  ),
  args: {
    value: 1,
    min: 1,
    max: 10,
  },
};



export const InitialQuantity: Story = {
  render: (args) => (
    <QuantityWrapper {...args}/>
  ),
  args: {
    value: 5,
    min: 1,
    max: 20,
  },
};

export const WithMaximumLimit: Story = {
  render: (args) => (
    <QuantityWrapper {...args}/>
  ),
  args: {
    value: 10,
    min: 1,
    max: 10,
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    min: 1,
    max: 10,
    disabled: true,
    onChange: () => {},
  },
};

export const WithoutMaximumLimit: Story = {
  render: (args) => (
    <QuantityWrapper {...args}/>
  ),
  args: {
    value: 1,
    min: 1,
  },
};

export const CustomStyle: Story = {
  render: (args) => (
    <QuantityWrapper {...args}/>
  ),
  args: {
    value: 2,
    min: 1,
    max: 5,
    className: 'bg-gray-100',
    buttonClassName: 'text-blue-600',
    inputClassName: 'font-bold',
  },
};