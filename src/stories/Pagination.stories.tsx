import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Pagination } from "../lib";

const meta: Meta<typeof Pagination> = {
    title: "Molecules/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        onPageChange: {
            action: "pageChanged",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 27,
        siblingCount: 1,
        disabled: false,
    },

    render: (args) => {
        const [page, setPage] = useState(args.currentPage);

        return (
            <Pagination
                {...args}
                currentPage={page}
                onPageChange={(page) => {
                    setPage(page);
                    args.onPageChange?.(page);
                }}
            />
        );
    },
};

export const FirstPage: Story = {
    args: {
        currentPage: 1,
        totalPages: 27,
    },
};

export const MiddlePage: Story = {
    args: {
        currentPage: 10,
        totalPages: 27,
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 27,
        totalPages: 27,
    },
};

export const FivePages: Story = {
    args: {
        currentPage: 3,
        totalPages: 5,
    },
};

export const Disabled: Story = {
    args: {
        currentPage: 5,
        totalPages: 27,
        disabled: true,
    },
};