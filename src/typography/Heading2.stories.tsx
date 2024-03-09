import type { Meta, StoryObj } from '@storybook/react'

import { Heading2 } from './Heading2'

const meta: Meta<typeof Heading2> = {
  component: Heading2,
  title: 'Typography/Heading2',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading2>

export const Primary: Story = {
  args: {
    content: 'Heading2'
  }
}
