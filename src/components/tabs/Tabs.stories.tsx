import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, Tab } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs/Tabs',
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: () => (
    <Tabs>
      <Tab label='JavaScript'>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
        <div>Content 1</div>
      </Tab>
      <Tab label='TypeScript'>
        <div>Content 2</div>
        <div>Content 2</div>
        <div>Content 2</div>
        <div>Content 2</div>
      </Tab>
      <Tab label='REST API'>
        <div>Content 3</div>
        <img src='https://source.unsplash.com/random' alt='' />
      </Tab>
    </Tabs>
  )
}
