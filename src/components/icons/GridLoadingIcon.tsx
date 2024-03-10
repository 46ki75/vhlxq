/** @jsxImportSource @emotion/react */

import React, { memo } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'

const svgStyle = (size: number): SerializedStyles => css`
  height: ${size}px;
  width: ${size}px;
`

const blinkAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`

const rectStyle = (delay: number): SerializedStyles => css`
  animation-name: ${blinkAnimation};
  animation-duration: 0.4s;
  animation-delay: ${0.1 * delay}s;
  animation-fill-mode: both;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`

interface GridLoadingIconProps {
  animation: boolean
  size: number
}

export const GridLoadingIcon = memo(
  ({
    animation = true,
    size = 64
  }: GridLoadingIconProps): React.JSX.Element => {
    return (
      <svg
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid meet'
        css={svgStyle(size)}
      >
        {/* 1-1 */}
        <rect
          css={animation && rectStyle(0)}
          width={20}
          height={20}
          x={10}
          y={10}
          fill='black'
          stroke='transparent'
        />
        {/* 1-2 */}
        <rect
          css={animation && rectStyle(1)}
          width={20}
          height={20}
          x={40}
          y={10}
          fill='black'
          stroke='transparent'
        />
        {/* 1-3 */}
        <rect
          css={animation && rectStyle(2)}
          width={20}
          height={20}
          x={70}
          y={10}
          fill='black'
          stroke='transparent'
        />
        {/* 2-1 */}
        <rect
          css={animation && rectStyle(7)}
          width={20}
          height={20}
          x={10}
          y={40}
          fill='black'
          stroke='transparent'
        />
        {/* 2-2 */}
        <rect
          width={20}
          height={20}
          x={40}
          y={40}
          fill='black'
          stroke='transparent'
        />
        {/* 2-3 */}
        <rect
          css={animation && rectStyle(3)}
          width={20}
          height={20}
          x={70}
          y={40}
          fill='black'
          stroke='transparent'
        />
        {/* 3-1 */}
        <rect
          css={animation && rectStyle(6)}
          width={20}
          height={20}
          x={10}
          y={70}
          fill='black'
          stroke='transparent'
        />
        {/* 3-2 */}
        <rect
          css={animation && rectStyle(5)}
          width={20}
          height={20}
          x={40}
          y={70}
          fill='black'
          stroke='transparent'
        />
        {/* 3-3 */}
        <rect
          css={animation && rectStyle(4)}
          width={20}
          height={20}
          x={70}
          y={70}
          fill='black'
          stroke='transparent'
        />
      </svg>
    )
  }
)

GridLoadingIcon.displayName = 'GridLoadingIcon'
