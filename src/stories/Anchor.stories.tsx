import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    AiOutlineArrowRight,
    AiOutlineDownload,
    AiOutlineHome,
    AiOutlineMail,
} from "react-icons/ai";

import Rb_Anchor from "../lib/components/atoms/Rb_Anchor";

const meta: Meta<typeof Rb_Anchor> = {
    title: "Components/Anchor",
    component: Rb_Anchor,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "underline", "button"],
        },
        target: {
            control: "select",
            options: ["_self", "_blank"],
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

type Story = StoryObj<typeof Rb_Anchor>;

export const Default: Story = {
    args: {
        href: "https://example.com",
        children: "Default Link",
        variant: "default",
    },
};

export const Underline: Story = {
    args: {
        href: "https://example.com",
        children: "Underline Link",
        variant: "underline",
    },
};

export const Button: Story = {
    args: {
        href: "https://example.com",
        children: "Button Link",
        variant: "button",
    },
};

export const LeftIcon: Story = {
    args: {
        href: "https://example.com",
        children: "Home",
        leftIcon: <AiOutlineHome />,
    },
};

export const RightIcon: Story = {
    args: {
        href: "https://example.com",
        children: "Learn More",
        rightIcon: <AiOutlineArrowRight />,
    },
};

export const BothIcons: Story = {
    args: {
        href: "https://example.com",
        children: "Get Started",
        variant: "button",
        leftIcon: <AiOutlineHome />,
        rightIcon: <AiOutlineArrowRight />,
    },
};

export const ExternalLink: Story = {
    args: {
        href: "https://google.com",
        children: "Open Google",
        target: "_blank",
        rightIcon: <AiOutlineArrowRight />,
    },
};

export const Download: Story = {
    args: {
        href: "/sample.pdf",
        download: true,
        children: "Download PDF",
        leftIcon: <AiOutlineDownload />,
    },
};

export const Email: Story = {
    args: {
        href: "mailto:hello@example.com",
        children: "Email Us",
        leftIcon: <AiOutlineMail />,
    },
};

export const Telephone: Story = {
    args: {
        href: "tel:+919876543210",
        children: "Call Us",
    },
};

export const CustomClass: Story = {
    args: {
        href: "https://example.com",
        children: "Custom Styled Link",
        className: "text-red-600 font-bold",
    },
};