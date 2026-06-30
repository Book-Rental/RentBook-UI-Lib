import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import PriceRangeSlider from "../lib/components/atoms/PriceRangeSlider";

const meta: Meta<typeof PriceRangeSlider> = {
    title: "Molecules/Price Range Slider",
    component: PriceRangeSlider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onChange: {
            action: "rangeChanged",
        },
    },
};

export default meta;

type Story = StoryObj<typeof PriceRangeSlider>;

const InteractiveSlider = (args: any) => {
    const [range, setRange] = useState<[number, number]>(args.value);

    return (
        <div
            style={{
                width: "500px",
                padding: "40px",
            }}
        >
            <PriceRangeSlider
                {...args}
                value={range}
                onChange={(value) => {
                    setRange(value);
                    args.onChange?.(value);
                }}
            />
        </div>
    );
};

export const Default: Story = {
    args: {
        min: 0,
        max: 500,
        value: [100, 350],
        step: 10,
        currency: "₹",
        showTooltip: true,
        showTicks: false,
        disabled: false,
    },
    render: (args) => <InteractiveSlider {...args} />,
};

export const BookRental: Story = {
    args: {
        min: 0,
        max: 500,
        value: [50, 250],
        currency: "₹",
        showTooltip: true,
        showTicks: true,
    },
    render: (args) => <InteractiveSlider {...args} />,
};

export const DollarCurrency: Story = {
    args: {
        min: 0,
        max: 1000,
        value: [250, 800],
        currency: "$",
        showTooltip: true,
    },
    render: (args) => <InteractiveSlider {...args} />,
};

export const EuroCurrency: Story = {
    args: {
        min: 0,
        max: 2000,
        value: [500, 1500],
        currency: "€",
        showTooltip: true,
    },
    render: (args) => <InteractiveSlider {...args} />,
};

export const Disabled: Story = {
    args: {
        min: 0,
        max: 500,
        value: [150, 350],
        currency: "₹",
        disabled: true,
        showTooltip: true,
    },
};

export const WithoutTooltip: Story = {
    args: {
        min: 0,
        max: 500,
        value: [150, 300],
        currency: "₹",
        showTooltip: false,
    },
    render: (args) => <InteractiveSlider {...args} />,
};

export const LargeRange: Story = {
    args: {
        min: 0,
        max: 10000000000,
        value: [2500000, 5000000000],
        step: 100,
        currency: "₹",
        showTooltip: true,
    },
    render: (args) => <InteractiveSlider {...args} />,
};
