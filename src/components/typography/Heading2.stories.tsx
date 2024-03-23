import type { Meta, StoryObj } from '@storybook/react'

import { Heading2 } from './Heading2'

const meta: Meta<typeof Heading2> = {
  component: Heading2,
  title: 'Typography/Heading2',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading2>

export const Primary: Story = {
  args: {
    content: 'Heading2',
    size: '1.5rem'
  }
}

export const Scroll: Story = {
  render: () => (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <Heading2 content={'Heading2 - ' + i.toString()} key={i} />
      ))}
    </>
  )
}
