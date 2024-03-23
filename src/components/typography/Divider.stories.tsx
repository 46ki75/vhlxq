import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Typography/Divider',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Divider>

export const Primary: Story = {
  args: {
    text: 'End of Contents'
  }
}

export const NoText: Story = {
  args: {}
}

export const Scroll: Story = {
  render: () => (
    <>
      {Array.from({ length: 100 }).map((_, i) => (
        <Divider text={i.toString()} key={i} />
      ))}
    </>
  )
}
