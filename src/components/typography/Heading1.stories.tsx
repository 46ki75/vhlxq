import type { Meta, StoryObj } from '@storybook/react'

import { Heading1 } from './Heading1'

const meta: Meta<typeof Heading1> = {
  component: Heading1,
  title: 'Typography/Heading1',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading1>

export const Primary: Story = {
  args: {
    content: 'Heading1',
    size: '1.5rem'
  }
}