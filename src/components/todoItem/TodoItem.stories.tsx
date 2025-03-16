import { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "Components/TodoItem",
  component: TodoItem,
  argTypes: { onToggle: { action: "toggle" }, onDelete: { action: "delete" } },
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    todo: { id: 1, text: "할 일", completed: false },
  },
};

export const Completed: Story = {
  args: {
    todo: { id: 1, text: "완료된 할 일", completed: true },
  },
};
