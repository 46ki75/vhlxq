import type { Meta, StoryObj } from '@storybook/react'

import { NotionHTML } from './NotionHTML'
import { seed } from './seed'
import { type DOMJSON } from 'notion-markup-utils/dist/block/DOMJSON'

const meta: Meta<typeof NotionHTML> = {
  component: NotionHTML,
  title: 'Notion/NotionRawHTML',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof NotionHTML>

export const Primary: Story = {
  args: { domjson: seed as DOMJSON[] }
}
