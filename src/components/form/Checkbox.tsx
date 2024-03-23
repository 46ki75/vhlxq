/** @jsxImportSource @emotion/react */
'use client'

import React from 'react'
import { css, keyframes } from '@emotion/react'

export interface CheckboxProps {
  /**
   * **optional?**
   *
   * The color of the checkbox.
   */
  color?: string
  /**
   * **optional?**
   *
   * Whether it is checked or not.
   */
  isChecked?: boolean
  /**
   * **optional?**
   *
   * The label displayed.
   */
  label: string
  /**
   * **required!**
   *
   * Setting to true disables it.
   */
  isDisable?: boolean
  /**
   * **optional?**
   *
   * By passing the set function of `useState<boolean>`, you can manage the state.
   * In this case, it is convenient to also pass the value managed by the state to `isChecked`.
   *
   * ## Usage:
   * ```tsx
   * const [isChecked, setIsChecked] = useState<boolean>(false)
   * return (
   *   <Checkbox
   *     label='My Checkbox'
   *     isChecked={isChecked}
   *     setIsChecked={setIsChecked}
   *   />
   * )
   * ```
   */
  setIsChecked: (flag: boolean) => void
}

export const Checkbox = ({
  color = 'rgba(0,0,0,0.8)',
  label,
  isChecked = false,
  isDisable = false,
  setIsChecked
}: CheckboxProps): React.JSX.Element => {
  const containerStyle = css`
    width: fit-content;
    * {
      font-family: sans-serif;
      user-select: none;
    }
  `

  const checkLineAnimation = keyframes`
    0% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: 0%;
    }
  `

  const checkLineStyle = css`
    stroke-dasharray: 100%;
    animation: ${checkLineAnimation} 0.2s ease-in-out 0.1s both;
    transform-origin: center;
  `

  return (
    <div
      css={containerStyle}
      onClick={() => {
        if (!isDisable) setIsChecked(!isChecked)
      }}
    >
      <div
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <svg width={24} height={24}>
          <rect
            style={{ transition: 'all 0.2s' }}
            x={4}
            y={4}
            width={16}
            height={16}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={0.8}
            fill={isChecked ? (isDisable ? 'gray' : color) : 'transparent'}
          />
          {isChecked && (
            <polyline
              css={checkLineStyle}
              points='5,12 10,17 19,8'
              strokeWidth={1.5}
              stroke={'white'}
              fill='transparent'
            />
          )}
          {/* diagonal */}
          {isDisable && (
            <line
              x1={2}
              y1={22}
              x2={22}
              y2={2}
              stroke={isDisable ? 'gray' : color}
              strokeWidth={1}
              fill='transparent'
            />
          )}

          {/* top */}
          <line
            x1={0}
            y1={1}
            x2={4}
            y2={1}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={2}
            fill='transparent'
          />
          <line
            x1={4}
            y1={0}
            x2={24}
            y2={0}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1}
            fill='transparent'
          />
          {/* left */}
          <line
            x1={0}
            y1={4}
            x2={0}
            y2={16}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1}
            fill='transparent'
          />
          <line
            x1={0}
            y1={18}
            x2={0}
            y2={20}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1}
            fill='transparent'
          />

          {/* bottom */}
          <line
            x1={0}
            y1={24}
            x2={20}
            y2={24}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1}
            fill='transparent'
          />
          <line
            x1={20}
            y1={23}
            x2={24}
            y2={23}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1.5}
            fill='transparent'
          />

          {/* right */}

          <line
            x1={24}
            y1={4}
            x2={24}
            y2={20}
            stroke={isDisable ? 'gray' : color}
            strokeWidth={1}
            fill='transparent'
          />
        </svg>
        <div>{label}</div>
      </div>
    </div>
  )
}
