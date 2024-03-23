import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'
import { useState } from 'react'
import { colors } from '../../colors'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
      <Checkbox
        label='My Checkbox'
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    )
  }
}

export const Disabled: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
      <Checkbox
        label='My Checkbox (disabled)'
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isDisable={true}
      />
    )
  }
}

export const Colored: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
      <Checkbox
        label='My Checkbox (disabled)'
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        color={colors.cyan[700]}
      />
    )
  }
}
