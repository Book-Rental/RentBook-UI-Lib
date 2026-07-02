import type { Meta, StoryObj } from "@storybook/react-vite";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import Rb_Button from "../lib/components/atoms/Rb_Button";

const meta: Meta<typeof Rb_Button> = {
  title: "Components/Button",
  component: Rb_Button,
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
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Button>;

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
    children: "Get Started",
    leftIcon: <FaHeart />,
    rightIcon: <FaArrowRight />,
  },
};