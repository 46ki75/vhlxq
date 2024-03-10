import type { Meta, StoryObj } from '@storybook/react'

import { FragmentIdentifier } from './FragmentIdentifier'

const meta: Meta<typeof FragmentIdentifier> = {
  component: FragmentIdentifier,
  title: 'Typography/FragmentIdentifier',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof FragmentIdentifier>

export const Primary: Story = {
  args: {
    content: 'Conetnt of Heading'
  }
}
