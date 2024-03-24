import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Typography/Toggle',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  args: {
    summary: 'Equation',
    children: (
      <div>
        Equation block objects are represented as children of paragraph blocks.
        They are nested within a rich text object and contain the following
        information within the equation property:
      </div>
    )
  }
}
