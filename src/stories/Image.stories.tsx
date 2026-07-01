import type { Meta, StoryObj } from "@storybook/react-vite";

import Rb_Image from "../lib/components/atoms/Rb_Image";

const meta: Meta<typeof Rb_Image> = {
    title: "Components/Image",
    component: Rb_Image,
    tags: ["autodocs"],
    argTypes: {
        shape: {
            control: "select",
            options: ["default", "rounded", "circle"],
        },
        aspectRatio: {
            control: "text",
        },
        loading: {
            control: "select",
            options: ["lazy", "eager"],
        },
        onError: {
            action: "error",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Rb_Image>;

export const Default: Story = {
    args: {
        src: "https://picsum.photos/300/200",
        alt: "Default Image",
        width: 300,
        height: 200,
    },
};

export const Rounded: Story = {
    args: {
        src: "https://picsum.photos/300/200",
        alt: "Rounded Image",
        shape: "rounded",
        width: 300,
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        src: "https://picsum.photos/200",
        alt: "Circle Image",
        shape: "circle",
        width: 200,
        height: 200,
    },
};

export const AspectRatio16by9: Story = {
    args: {
        src: "https://picsum.photos/800/450",
        alt: "16:9 Image",
        aspectRatio: "16 / 9",
        width: 400,
    },
};

export const AspectRatio1by1: Story = {
    args: {
        src: "https://picsum.photos/400",
        alt: "Square Image",
        aspectRatio: "1 / 1",
        width: 250,
    },
};

export const LazyLoading: Story = {
    args: {
        src: "https://picsum.photos/300/200",
        alt: "Lazy Loaded Image",
        loading: "lazy",
        width: 300,
        height: 200,
    },
};

export const EagerLoading: Story = {
    args: {
        src: "https://picsum.photos/300/200",
        alt: "Eager Loaded Image",
        loading: "eager",
        width: 300,
        height: 200,
    },
};

export const CustomClass: Story = {
    args: {
        src: "https://picsum.photos/300/200",
        alt: "Custom Styled Image",
        width: 300,
        height: 200,
        className: "border-4 border-blue-500 shadow-lg",
    },
};

export const FallbackImage: Story = {
    args: {
        src: "https://invalid-url.com/image.jpg",
        alt: "Fallback Image",
        width: 300,
        height: 200,
    },
};

export const CustomFallback: Story = {
    args: {
        src: "https://invalid-url.com/image.jpg",
        fallbackSrc: "https://placehold.co/300x200?text=Fallback",
        alt: "Custom Fallback",
        width: 300,
        height: 200,
    },
};