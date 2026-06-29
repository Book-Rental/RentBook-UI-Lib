import type { Meta, StoryObj } from "@storybook/react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import Button from "../lib/components/atoms/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const LeftIcon: Story = {
  args: {
    children: "Wishlist",
    leftIcon: <FaHeart />,
  },
};

export const RightIcon: Story = {
  args: {
    children: "Continue",
    rightIcon: <FaArrowRight />,
  },
};

export const BothIcons: Story = {
  args: {
    children: "Nishant",
    leftIcon: <FaHeart />,
    rightIcon: <FaArrowRight />,
    isLoading: false,
    className: ""
  },
};