import { Meta, StoryObj } from "@storybook/react";
import { AddButton } from "./AddButton";

const meta: Meta<typeof AddButton> = {
  title: "Components/AddButton",
  component: AddButton,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const Default: Story = {};
