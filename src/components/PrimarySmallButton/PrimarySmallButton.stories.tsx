import { Meta, Story } from "@storybook/react"
import { PrimarySmallButton, Props } from "."

export default {
  title: "Components/PrimarySmallButton",
  args: { name: "Save" },
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <PrimarySmallButton {...args} />

export const PrimarySmallButtonStory = Template.bind({})
