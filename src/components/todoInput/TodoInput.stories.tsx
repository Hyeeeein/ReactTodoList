import { Meta, StoryObj } from "@storybook/react";
import { TodoInput } from "./TodoInput";

const meta: Meta<typeof TodoInput> = {
  title: "Components/TodoInput",
  component: TodoInput,
  argTypes: { onChange: { action: "changed" } },
};

export default meta;
type Story = StoryObj<typeof TodoInput>;

export const Default: Story = {
  args: {
    value: "",
  },
};
