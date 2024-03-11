/** @jsxImportSource @emotion/react */
'use client'

import React, { memo, useEffect, useRef, useState } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { FragmentIdentifier } from './FragmentIdentifier'
import { useInView } from 'framer-motion'

const headingStyle = (size: string | number): SerializedStyles => css`
  margin: 0;
  position: relative;
  overflow: hidden;

  span {
    font-size: ${typeof size === 'string' ? size : size + 'px'};
    display: inline-block;
    animation-name: ${keyframes`
    from { transform: translateY(100px) }
    to { transform: translateY(0px) }
  `};
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
  }

  &::selection {
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }

  &::after {
    position: absolute;
    content: '';
    right: 2px;
    bottom: 0;
    width: 6px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.8;
    transform: skewX(-25deg);
  }

  &::before {
    position: absolute;
    content: '';
    right: 10px;
    bottom: 0;
    width: 6px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.8;
    transform: skewX(-25deg);
  }
`

const upperlineContainerStyle = css`
  display: flex;
  flex-direction: row;
  div:nth-of-type(1) {
    width: 3px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.9);
  }

  div:nth-of-type(2) {
    width: 64px;
    height: 1px;
    border-top: dashed 1px rgba(0, 0, 0, 0.9);
    opacity: 0.3;
  }

  div:nth-of-type(3) {
    width: 128px;
    height: 1px;
    border-top: dotted 1px rgba(0, 0, 0, 0.9);
    opacity: 0.2;
  }
`

const underlineContainerStyle = css`
  width: 100%;
  margin-top: 2px;
  border-top: solid 1px rgba(0, 0, 0, 0.9);

  animation-name: ${keyframes`
    from { width: 0% }
    to { width: 100% }
  `};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  div {
    width: 16px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.9);
  }
`

interface Heading3Props {
  content: string
  size?: string | number
}

export const Heading3 = memo(
  ({ content, size = '1.25rem' }: Heading3Props): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
      setAnimationKey((prevKey) => prevKey + 1)
    }, [isInView])

    return (
      <>
        <div css={upperlineContainerStyle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 css={headingStyle(size)} ref={ref} id={content}>
          <span key={animationKey}>{content}</span>
        </h3>
        <div css={underlineContainerStyle} key={animationKey}>
          <div></div>
        </div>
        <FragmentIdentifier content={content} />
      </>
    )
  }
)

Heading3.displayName = 'Heading3'
