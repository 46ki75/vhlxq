import type { Meta, StoryObj } from '@storybook/react'

import { Callout } from './Callout'
import { colors } from '../../colors'

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: 'Typography/Callout',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: Object.keys(colors)
    }
  }
}

export default meta
type Story = StoryObj<typeof Callout>

export const Primary: Story = {
  args: {
    color: 'green',
    title: 'Title of Callout Block',
    children: (
      <>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </>
    )
  }
}

export const NoTitle: Story = {
  args: {
    color: 'green',
    children: (
      <>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </>
    )
  }
}

export const Scroll: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.keys(colors).map((c) => (
        <Callout title='Title of Callout Block' key={c}>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Callout>
      ))}
    </div>
  )
}
