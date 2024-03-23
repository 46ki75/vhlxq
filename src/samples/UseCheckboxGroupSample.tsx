import React from 'react'
import { useCheckboxGroup } from '../hooks/useCheckboxGroup'
import { CodeBlock } from '../components/code/CodeBlock'
import { Heading1 } from '../components/typography/Heading1'
import { Heading2 } from '../components/typography/Heading2'
import { Heading3 } from '../components/typography/Heading3'
import { Divider } from '../components/typography/Divider'

export const UseCheckboxGroupSample = (): React.JSX.Element => {
  return (
    <div>
      <Heading1 content='useCheckboxGroup' />

      <p>
        The &quot;check All&quot; button is used by passing true to
        `setAllCheckboxes`, which is returned from the hook. This allows you to
        check all the checkboxes. The &quot;reset&quot; button does the
        opposite.
      </p>

      <Heading2 content='Sample' />
      <Divider text='start' />
      {Main()}
      <Divider text='end' />

      <p>
        The data for the state of the checkbox is stored in the `data` returned
        from the `useCheckboxGroup` hook. Below is an example of its value,
        which is linked with the above checkbox.
      </p>

      <Heading3 content='code' />
      <CodeBlock code={code} language='tsx' />
    </div>
  )
}

const Main = (): React.JSX.Element => {
  const { data, render, setAllCheckboxes } = useCheckboxGroup([
    {
      label: 'My Checkbox 1',
      color: 'red'
    },
    {
      label: 'My Checkbox 2'
    },
    {
      label: 'My Checkbox 3'
    }
  ])

  return (
    <div>
      {render()}

      <button
        onClick={() => {
          setAllCheckboxes(true)
        }}
      >
        check All
      </button>

      <button
        style={{ margin: '1rem' }}
        onClick={() => {
          setAllCheckboxes(false)
        }}
      >
        reset
      </button>

      <CodeBlock
        code={JSON.stringify(data, null, 2)}
        language='json'
        caption='data'
      />
    </div>
  )
}

const code = `
const Main = (): React.JSX.Element => {
  const { data, render, setAllCheckboxes } = useCheckboxGroup([
    {
      label: 'My Checkbox 1',
      color: 'red'
    },
    {
      label: 'My Checkbox 2'
    },
    {
      label: 'My Checkbox 3'
    }
  ])

  return (
    <div>
      {render()}

      <button
        onClick={() => {
          setAllCheckboxes(true)
        }}
      >
        check All
      </button>

      <button
        style={{ margin: '1rem' }}
        onClick={() => {
          setAllCheckboxes(false)
        }}
      >
        reset
      </button>

      <CodeBlock
        code={JSON.stringify(data, null, 2)}
        language='json'
        caption='data'
      />
    </div>
  )
}
`
