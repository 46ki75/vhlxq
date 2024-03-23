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
    text: 'Link Text',
    href: '',
    external: false
  }
}

export const External: Story = {
  args: {
    text: 'Link Text (External)',
    href: 'https://example.com',
    external: true
  }
}
