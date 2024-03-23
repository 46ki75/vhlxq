import type { Meta, StoryObj } from '@storybook/react'

import { GridLoadingIcon } from './GridLoadingIcon'

const meta: Meta<typeof GridLoadingIcon> = {
  component: GridLoadingIcon,
  title: 'Icons/GridLoadingIcon',
  tags: ['autodocs'],
  argTypes: {
    animation: { options: 'toggle' }
  }
}

export default meta
type Story = StoryObj<typeof GridLoadingIcon>

export const Primary: Story = {
  args: {
    animation: true,
    size: 64
  }
}

export const Tiny: Story = {
  args: {
    animation: true,
    size: 16
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
