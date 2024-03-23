import type { Meta, StoryObj } from '@storybook/react'

import { Heading1 } from './Heading1'

const meta: Meta<typeof Heading1> = {
  component: Heading1,
  title: 'Typography/Heading1',
  tags: ['autodocs'],
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

export const Scroll: Story = {
  render: () => (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <Heading1 content={'Heading3 - ' + i.toString()} key={i} />
      ))}
    </>
  )
}
