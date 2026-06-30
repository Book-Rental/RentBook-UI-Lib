import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from '../lib/components/atoms/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept Terms & Conditions',
    checked: false,
    disabled: false,
  },

  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  args: {
    label: 'Receive Email Notifications',
    checked: true,
  },

  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Newsletter Subscription',
    checked: false,
    disabled: true,
    onChange: () => { },
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Email Verified',
    checked: true,
    disabled: true,
    onChange: () => { },
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },

  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

