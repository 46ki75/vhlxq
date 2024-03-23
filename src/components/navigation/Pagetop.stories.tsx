import type { Meta, StoryObj } from '@storybook/react'

import { Pagetop } from './Pagetop'

const meta: Meta<typeof Pagetop> = {
  component: Pagetop,
  title: 'Navigation/Pagetop',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['right', 'left'],
      defaultValue: 'right',
      table: {
        type: { summary: 'right | left' },
        defaultValue: { summary: 'right' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Pagetop>

export const Primary: Story = {
  args: {
    isVisible: true,
    position: 'right'
  }
}

export const Scroll: Story = {
  render: () => (
    <>
      <div
        style={{
          height: '3000px',
          background:
            'linear-gradient(45deg, #ffcc00 25%, #ffffff 25%, #ffffff 50%, #ffcc00 50%, #ffcc00 75%, #ffffff 75%)',
          backgroundSize: '420px 420px'
        }}
      ></div>
      <Pagetop />
    </>
  )
}
