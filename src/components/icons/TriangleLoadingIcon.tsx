/** @jsxImportSource @emotion/react */
'use client'

import React from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'

const lineAnimation = keyframes`
  0% { stroke-dasharray: 0% 240%; stroke-dashoffset: 120%; };
  50.1% {  stroke-dasharray: 240% 0%; stroke-dashoffset: 120%; };
  50.2% { stroke-dasharray: 240% 0%; stroke-dashoffset: 240%; };
  100% { stroke-dasharray: 0% 240%; stroke-dashoffset: 120%;  };
`

const svgStyle = (size: number): SerializedStyles => css`
  height: ${size}px;
  width: ${size}px;

  animation: ${lineAnimation} 1.2s ease-in-out infinite both;
`

interface TriangleLoadingIconProps {
  /**
   * **optional?**
   *
   * The vertical and horizontal size of the icon.
   */
  size?: number
  /**
   * **optional?**
   *
   * Color of the Icon.
   */
  color?: string
}

export const TriangleLoadingIcon = ({
  size = 64,
  color = 'black'
}: TriangleLoadingIconProps): React.JSX.Element => {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid meet'
      css={svgStyle(size)}
    >
      <polygon
        points='50,10 90,90 10,90'
        fill='transparent'
        stroke={color}
        strokeWidth='1'
      />
    </svg>
  )
}
