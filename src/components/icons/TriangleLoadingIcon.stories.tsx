import type { Meta, StoryObj } from '@storybook/react'

import { TriangleLoadingIcon } from './TriangleLoadingIcon'

const meta: Meta<typeof TriangleLoadingIcon> = {
  component: TriangleLoadingIcon,
  title: 'Icons/TriangleLoadingIcon',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof TriangleLoadingIcon>

export const Primary: Story = {
  args: {
    size: 64
  }
}

export const Tiny: Story = {
  args: {
    size: 16
  }
}

export const Small: Story = {
  args: {
    size: 32
  }
}

export const Large: Story = {
  args: {
    size: 128
  }
}
