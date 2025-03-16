import { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const LightMode: Story = {
  args: { darkMode: true },
};

export const DarkMode: Story = {
  args: { darkMode: true },
};
