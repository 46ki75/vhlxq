import type { Meta, StoryObj } from '@storybook/react'

import { ImageWithModal } from './ImageWithModal'

const meta: Meta<typeof ImageWithModal> = {
  component: ImageWithModal,
  title: 'Typography/ImageWithModal',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof ImageWithModal>

export const Primary: Story = {
  args: {
    src: '/ogp.webp'
  }
}

export const Portrait: Story = {
  args: {
    src: '/sample.webp'
  }
}
