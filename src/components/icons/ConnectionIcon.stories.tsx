import type { Meta, StoryObj } from '@storybook/react'

import { ConnectionIcon } from './ConnectionIcon'

const meta: Meta<typeof ConnectionIcon> = {
  component: ConnectionIcon,
  title: 'Icons/ConnectionIcon',
  argTypes: {
    animation: { options: 'toggle' }
  }
}

export default meta
type Story = StoryObj<typeof ConnectionIcon>

export const Primary: Story = {
  args: {
    animation: true,
    size: 64
  }
}

export const Small: Story = {
  args: {
    animation: true,
    size: 32
  }
}

export const Large: Story = {
  args: {
    animation: true,
    size: 128
  }
}
