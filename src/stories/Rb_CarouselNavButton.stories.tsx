import type { Meta, StoryObj } from "@storybook/react-vite";

import Rb_CarouselNavButton from "../lib/components/atoms/Rb_CarouselNavButton";

const meta: Meta<typeof Rb_CarouselNavButton> = {
    title: "Components/CarouselNavButton",
    component: Rb_CarouselNavButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        direction: {
            control: "inline-radio",
            options: ["prev", "next"],
        },
        disabled: {
            control: "boolean",
        },
        onClick: {
            action: "clicked",
        },
        className: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Rb_CarouselNavButton>;

export const Previous: Story = {
    args: {
        direction: "prev",
        disabled: false,
    },
};

export const Next: Story = {
    args: {
        direction: "next",
        disabled: false,
    },
};

export const PreviousDisabled: Story = {
    args: {
        direction: "prev",
        disabled: true,
    },
};

export const NextDisabled: Story = {
    args: {
        direction: "next",
        disabled: true,
    },
};

export const NavigationButtons: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Rb_CarouselNavButton
                direction="prev"
                onClick={() => console.log("Previous clicked")}
            />
            <Rb_CarouselNavButton
                direction="next"
                onClick={() => console.log("Next clicked")}
            />
        </div>
    ),
};

export const DisabledNavigationButtons: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Rb_CarouselNavButton
                direction="prev"
                disabled
                onClick={() => { }}
            />
            <Rb_CarouselNavButton
                direction="next"
                disabled
                onClick={() => { }}
            />
        </div>
    ),
};