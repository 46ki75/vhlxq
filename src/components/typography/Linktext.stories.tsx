import type { Meta, StoryObj } from '@storybook/react'

import { Linktext } from './Linktext'

const meta: Meta<typeof Linktext> = {
  component: Linktext,
  title: 'Typography/Linktext',
  tags: ['autodocs'],
  argTypes: {
    external: { options: 'toggle' }
  }
}

export default meta
type Story = StoryObj<typeof Linktext>

export const Primary: Story = {
  args: {
    href: 'https://example.com',
    external: false
  }
}

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true
  }
}
