import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Rb_Radio from "../lib/components/atoms/Rb_Radio";


const meta: Meta<typeof Rb_Radio> = {
  title: "Components/Radio",
  component: Rb_Radio,
  tags: ["autodocs"],
  argTypes: {
    radioSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rb_Radio>;

export const Default: Story = {
  args: {
    label: "Male",
    radioSize: "md",
  },
};

export const Small: Story = {
  args: {
    label: "Small Radio",
    radioSize: "sm",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Radio",
    radioSize: "md",
  },
};

export const Large: Story = {
  args: {
    label: "Large Radio",
    radioSize: "lg",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
    radioSize: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    radioSize: "md",
  },
};

export const RadioGroup: Story = {
  render: () => {
    const RadioGroupComponent = () => {
      const [selected, setSelected] = useState("male");

      return (
        <div style={{ display: "flex", gap: "20px" }}>
          <Rb_Radio
            label="Male"
            name="gender"
            value="male"
            checked={selected === "male"}
            onChange={() => setSelected("male")}
          />

          <Rb_Radio
            label="Female"
            name="gender"
            value="female"
            checked={selected === "female"}
            onChange={() => setSelected("female")}
          />

          <Rb_Radio
            label="Other"
            name="gender"
            value="other"
            checked={selected === "other"}
            onChange={() => setSelected("other")}
          />
        </div>
      );
    };

    return <RadioGroupComponent />;
  },
};