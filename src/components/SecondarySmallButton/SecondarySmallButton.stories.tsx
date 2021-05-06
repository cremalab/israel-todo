import { Meta, Story } from "@storybook/react"
import { Props, SecondarySmallButton } from "."

export default {
  title: "Components/SecondarySmallButton",
  args: { name: "Cancel" },
  argTypes: {
    closeModal: { action: "clicked" },
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <SecondarySmallButton {...args} />

export const SecondarySmallButtonStory = Template.bind({})
