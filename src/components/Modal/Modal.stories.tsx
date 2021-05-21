import { Meta, Story } from "@storybook/react"
import { Modal, Props } from "./Modal"

export default {
  title: "Components/Modal",
  args: { openConfirmModal: true, title: "Confirm you want to delete." },
  argTypes: {
    handleDelete: { action: "handleDelete" },
    closeModal: { action: "CloseModal" },
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <Modal {...args} />

export const ModalStory = Template.bind({})
