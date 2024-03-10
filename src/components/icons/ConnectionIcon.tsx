/** @jsxImportSource @emotion/react */

import React from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'

const svgStyle = (size: number): SerializedStyles => css`
  height: ${size}px;
  width: ${size}px;
`

const drawPolyine = keyframes`
  0% {
    stroke-dashoffset: 0%;
  }
  100% {
    stroke-dashoffset: -800%;
  }
`

const showPolyine = keyframes`
  0% {
    stroke-dashoffset: 0%;
  }
  100% {
    stroke-dashoffset: 0%;
  }
`

const polylineStyle = (animation: boolean): SerializedStyles => css`
  stroke-dasharray: 400%;
  animation: ${animation ? drawPolyine : showPolyine} 1.2s ease-out infinite
    both;
  transform-origin: center;
`

const drawCircle = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const circleStyle = (delay: number): SerializedStyles => css`
  animation: ${drawCircle} 0.6s ease-in-out alternate infinite both ${delay}s;
`

interface ConnectionIconProps {
  animation: boolean
  size: number
}

export const ConnectionIcon = ({
  animation = true,
  size = 64
}: ConnectionIconProps): React.JSX.Element => {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid meet'
      css={svgStyle(size)}
    >
      <polyline
        css={polylineStyle(animation)}
        points='8,50 20,50 25,30 35,70 40,10, 50,90 55,40 60,60 65,45 70,55 80,50 92,50'
        fill='transparent'
        stroke='black'
        strokeWidth='2'
      />
      <circle
        cx={4}
        cy={50}
        r={4}
        fill={'black'}
        css={animation && circleStyle(0)}
      />
      <circle
        cx={96}
        cy={50}
        r={4}
        fill={'black'}
        css={animation && circleStyle(0.6)}
      />
    </svg>
  )
}
