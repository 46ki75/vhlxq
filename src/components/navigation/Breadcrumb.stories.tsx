import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: 'Navigation/Breadcrumb',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Primary: Story = {
  args: {
    links: [
      { href: '', label: 'Home' },
      { href: '', label: 'Blog' },
      { href: '', label: 'Article' }
    ]
  }
}
