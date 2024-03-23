import React, { useReducer } from 'react'
import { Checkbox, type CheckboxProps } from '../components/form/Checkbox'

interface CheckboxState extends Omit<CheckboxProps, 'setIsChecked'> {}

type CheckboxAction =
  | { type: 'TOGGLE_CHECKBOX'; index: number }
  | { type: 'SET_ALL'; isChecked: boolean }

function reducer(
  state: CheckboxState[],
  action: CheckboxAction
): CheckboxState[] {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      return state.map((item, index) =>
        index === action.index
          ? { ...item, isChecked: !(item.isChecked ?? false) }
          : item
      )
    case 'SET_ALL':
      return state.map((item) => ({ ...item, isChecked: action.isChecked }))
    default:
      return state
  }
}

export function useCheckboxGroup(initialState: CheckboxState[]): {
  render: () => React.ReactNode
  toggleCheckbox: (index: number) => void
  setAllCheckboxes: (isChecked: boolean) => void
  data: CheckboxState[]
} {
  const [checkboxes, dispatch] = useReducer(
    reducer,
    initialState.map((item) => ({
      ...item,
      isChecked: item.isChecked ?? false
    }))
  )

  const toggleCheckbox = (index: number): void => {
    dispatch({ type: 'TOGGLE_CHECKBOX', index })
  }

  /**
   * If you want to check all checkboxies, set isChecked to `true`.
   *
   * If you want to uncheck all checkboxies, set isChecked to `false`.
   */
  const setAllCheckboxes = (isChecked: boolean): void => {
    dispatch({ type: 'SET_ALL', isChecked })
  }

  /**
   * A checkbox will be rendered at the location where this function is called.
   */
  const render = (): React.ReactNode => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {checkboxes.map((checkbox, index) => (
        <Checkbox
          key={checkbox.label}
          label={checkbox.label}
          color={checkbox.color}
          isChecked={checkbox.isChecked ?? false}
          setIsChecked={() => {
            toggleCheckbox(index)
          }}
        />
      ))}
    </div>
  )

  return { render, toggleCheckbox, setAllCheckboxes, data: checkboxes }
}
