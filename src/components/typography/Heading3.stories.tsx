import type { Meta, StoryObj } from '@storybook/react'

import { Heading3 } from './Heading3'

const meta: Meta<typeof Heading3> = {
  component: Heading3,
  title: 'Typography/Heading3',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading3>

export const Primary: Story = {
  args: {
    content: 'Heading3',
    size: '1.25rem'
  }
}

export const Scroll: Story = {
  render: () => (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <Heading3 content={'Heading3 - ' + i.toString()} key={i} />
      ))}
    </>
  )
}
