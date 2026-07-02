import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchField from "../lib/components/molecules/Search";


const meta: Meta<typeof SearchField> = {
    title: "Components/SearchField",
    component: SearchField,
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        required: {
            control: "boolean",
        },
        autoFocus: {
            control: "boolean",
        },
        value: {
            control: "text",
        },
        containerClassName: {
            control: "text",
        },
        className: {
            control: "text",
        },
        onChange: {
            action: "changed",
        },
        onFocus: {
            action: "focused",
        },
        onBlur: {
            action: "blurred",
        },
    },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
    args: {
        placeholder: "Search...",
    },
};

export const WithValue: Story = {
    args: {
        placeholder: "Search...",
        value: "React",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Search...",
        disabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        value: "Read only search",
        readOnly: true,
    },
};

export const Required: Story = {
    args: {
        placeholder: "Required field",
        required: true,
    },
};

export const AutoFocus: Story = {
    args: {
        placeholder: "Focus on load",
        autoFocus: true,
    },
};

export const CustomPlaceholder: Story = {
    args: {
        placeholder: "Search products...",
    },
};

export const CustomContainerStyle: Story = {
    args: {
        placeholder: "Custom container",
        containerClassName: "max-w-md",
    },
};

export const CustomInputStyle: Story = {
    args: {
        placeholder: "Custom input",
        className: "border-green-500 focus:ring-green-500",
    },
};

export const FullWidth: Story = {
    render: (args) => (
        <div style={{ width: "600px" }}>
            <SearchField {...args} />
        </div>
    ),
    args: {
        placeholder: "Full width search...",
    },
};