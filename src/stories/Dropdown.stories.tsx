import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "../lib/components/atoms/Dropdown";


const meta: Meta<typeof Dropdown> = {
    title: "Atoms/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
    { label: "Fiction", value: "fiction" },
    { label: "Science", value: "science" },
    { label: "History", value: "history" },
    { label: "Biography", value: "biography" },
    { label: "Technology", value: "technology" },
];

export const Default: Story = {
    args: {
        label: "Book Category",
        placeholder: "Select Category",
        options,
        disabled: false,
        required: false,
    },

    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <div style={{ width: 300 }}>
                <Dropdown
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
};

export const Required: Story = {
    args: {
        label: "Category",
        placeholder: "Select Category",
        options,
        required: true,
    },

    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <div style={{ width: 300 }}>
                <Dropdown
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        label: "Category",
        placeholder: "Select Category",
        options,
        value: "science",
        disabled: true,
        onChange: () => { },
    },
};

export const PreSelected: Story = {
    args: {
        label: "Category",
        options,
        value: "history",
        onChange: () => { },
    },
};


export const Empty: Story = {
    args: {
        label: "Category",
        placeholder: "No Categories Available",
        options: [],
        value: "",
        onChange: () => { },
    },
};