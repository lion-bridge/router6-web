import CtmMenu from "@/components/menu";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "CustomeMenu",
  component: CtmMenu,
} as Meta;

const Template: Story = (args) => <CtmMenu {...args} />;

export const Menu1 = Template.bind({});
