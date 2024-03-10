/** @jsxImportSource @emotion/react */

import React, { memo, useEffect, useRef, useState } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { useInView } from 'framer-motion'

const wrapperStyle = (hasText: boolean): SerializedStyles => css`
  width: 100%;
  height: 0.75rem;
  display: flex;
  flex-direction: row;
  /* ${hasText && 'gap: 1rem;'} */
  justify-content: center;
  align-items: center;

  * {
    transition: all 0.4s;
  }
`

const textStyle = css`
  font-family: sans-serif;
  font-size: 0.75rem;
  margin: 0 1rem;
  line-height: 0.75rem;
  color: rgba(0, 0, 0, 0.35);
  text-align: center;

  &::selection {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.8);
  }
`

const drawLine = keyframes`
  from{ max-width: 0%; }
  to{ max-width: 50%; }
`

const lineStyle = css`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.25);

  flex-grow: 1;

  animation-name: ${drawLine};
  animation-duration: 1.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const dotStyle = css`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
`

interface DividerProps {
  text?: string
}

export const Divider = memo(({ text }: DividerProps): React.JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [isInView])
  return (
    <>
      <hr style={{ opacity: 0, height: 1, margin: 0, padding: 0 }} ref={ref} />
      <div css={wrapperStyle(text != null)} key={animationKey}>
        <div css={dotStyle}></div>
        <div css={lineStyle}></div>
        {text != null && (
          <>
            <div css={dotStyle}></div>
            <span css={textStyle}>{text}</span>
            <div css={dotStyle}></div>
          </>
        )}
        <div css={lineStyle}></div>
        <div css={dotStyle}></div>
      </div>
    </>
  )
})

Divider.displayName = 'Divider'
