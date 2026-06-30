import type { Meta, StoryObj } from '@storybook/react';
import Rb_Text from '../lib/components/atoms/Rb_Text';


const meta: Meta<typeof Rb_Text> = {
  title: 'Components/Text',
  component: Rb_Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'small',
      ],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Text>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph.',
  },
};

export const Span: Story = {
  args: {
    variant: 'span',
    children: 'This is a span.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'This is small text.',
  },
};