import type { Meta, StoryObj } from '@storybook/react'

import { InfoIcon } from './InfoIcon'

const meta: Meta<typeof InfoIcon> = {
  component: InfoIcon,
  title: 'Icons/InfoIcon',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof InfoIcon>

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
