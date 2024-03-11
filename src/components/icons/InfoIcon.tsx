/** @jsxImportSource @emotion/react */

import React, { memo } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'

const svgStyle = (size: number): SerializedStyles => css`
  height: ${size}px;
  width: ${size}px;
`

const drawLine = (): SerializedStyles => keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const rotate = (): SerializedStyles => keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

const circleStyle = css`
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  animation:
    ${drawLine()} 0.6s ease-in-out both,
    ${rotate()} 0.6s linear both;
  transform-origin: center;
`

interface InfoIconProps {
  size?: number
  color?: string
}

export const InfoIcon = memo(
  ({ size = 64, color = 'black' }: InfoIconProps): React.JSX.Element => {
    return (
      <svg
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid meet'
        css={svgStyle(size)}
      >
        <circle
          css={circleStyle}
          cx={50}
          cy={50}
          r={45}
          fill='transparent'
          stroke={color}
          strokeWidth={7}
          strokeDasharray={283}
          strokeDashoffset={283}
        />

        <circle cx={50} cy={28} r={5} fill={color} />
        <line x1={50} x2={50} y1={44} y2={80} stroke={color} strokeWidth={7} />
      </svg>
    )
  }
)

InfoIcon.displayName = 'InfoIcon'
