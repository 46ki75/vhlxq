/** @jsxImportSource @emotion/react */

import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { memo, useCallback, useEffect, useState } from 'react'

const move = keyframes`
    25% {
        opacity: 1;
    }
    33% {
        opacity: 1;
        transform: translateY(20px);
    }
    67% {
        opacity: 1;
        transform: translateY(50px);
    }
    100% {
        opacity: 0;
        transform: translateY(65px) scale3d(0.5, 0.5, 0.5);
    }
`

const containerStyle = (
  isVisible: boolean,
  position: 'right' | 'left'
): SerializedStyles => css`
  position: fixed;
  bottom: 8px;
  ${position}: 8px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: all 0.7s;
  transform: ${isVisible
    ? 'translateY(0px) rotate(180deg)'
    : 'translateY(100px) rotate(-180deg)'};
  transform-origin: center;
`

const chevronStyle = css`
  position: absolute;
  width: 56px;
  height: 16px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${move} 3s ease-out infinite;

  &:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: rgba(15, 79, 116, 0.8);
  }

  &:before {
    left: -0.5px;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: -0.5px;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
`

const textStyle = (
  isVisible: boolean,
  position: 'right' | 'left'
): SerializedStyles => css`
  position: fixed;
  z-index: 50;
  ${position}: 8px;
  bottom: 1px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  opacity: ${isVisible ? 1 : 0};
  transition: all 0.2s ease-out 0.5s;
  user-select: none;
`

interface PagetopProps {
  isVisible?: boolean
  position?: 'right' | 'left'
}

export const Pagetop = memo(
  ({
    isVisible = false,
    position = 'right'
  }: PagetopProps): React.JSX.Element => {
    const [isVisibleLocal, setIsVisibleLocal] = useState(isVisible)

    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', (latest) => {
      if (latest > 500) {
        setIsVisibleLocal(true)
      } else {
        setIsVisibleLocal(false)
      }
    })

    useEffect(() => {
      setIsVisibleLocal(isVisible)
    }, [isVisible])

    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
      <>
        <div
          css={containerStyle(isVisibleLocal, position)}
          onClick={scrollToTop}
        >
          <div css={chevronStyle}></div>
          <div css={chevronStyle}></div>
          <div css={chevronStyle}></div>
        </div>
        <span css={textStyle(isVisibleLocal, position)}>Back to Top</span>
      </>
    )
  }
)

Pagetop.displayName = 'Pagetop'
