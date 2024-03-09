/** @jsxImportSource @emotion/react */

import React, { memo, useEffect, useRef, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import { useInView } from 'framer-motion'

const headingStyle = css`
  font-family: sans-serif;
  position: relative;
  display: block;
  margin: 0.5rem auto;
  padding: 0.3em 0.3em 0.3em 0.8em;
  border-width: 1px;
  border-style: solid;
  border-color: #b38a71;
  font-weight: bold;
  color: #4b3737;
  font-size: 26px;

  &::before,
  &::after {
    position: absolute;
    width: 12px;
    height: 12px;
    content: '';
    border-width: 1px 0 0 1px;
    border-style: solid;
    border-color: #b38a71;
  }

  &::before {
    top: 3px;
    left: 3px;
  }

  &::after {
    right: 3px;
    bottom: 3px;
    transform: scale(-1, -1);
  }
`

const textAnimation = keyframes`
  0% { background-position: 0% 0; color:rgba(0,0,0,1); }
  40% { background-position: 50% 0; color:rgba(64,64,64,1); }
  60% { background-position: 50% 0; color:rgba(0,0,0,0); }
  100% { background-position: 100% 0; color:rgba(0,0,0,0); }
`

const textStyle = css`
  display: inline-block;

  width: 100%;
  margin-left: -0.5rem;
  padding: 0 0.25rem;

  color: rgba(64, 64, 64, 1);

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0% 33.33%,
    rgba(64, 64, 64, 1) 33.33% 66.66%,
    rgba(0, 0, 0, 0) 66.66% 100%
  );
  background-size: 300% 100%;

  animation-name: ${textAnimation};
  animation-duration: 0.6s;
  animation-direction: reverse;

  &::selection {
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }
`

interface HeadingProps {
  content: string
}

export const Heading1 = memo(({ content }: HeadingProps): React.JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [isInView])

  return (
    <h1 css={headingStyle} ref={ref}>
      <span css={textStyle} key={animationKey}>
        {content}
      </span>
    </h1>
  )
})

Heading1.displayName = 'Heading1'
