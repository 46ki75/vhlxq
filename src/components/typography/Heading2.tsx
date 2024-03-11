/** @jsxImportSource @emotion/react */
'use client'

import React, { memo } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { FragmentIdentifier } from './FragmentIdentifier'
import { AnimateOnView } from '../utils/AnimateOnView'

const headingStyle = css`
  width: 100%;
  position: relative;
  margin: 0;

  font-family: sans-serif;

  background-color: rgba(0, 0, 0, 0.8);

  &::after {
    position: absolute;
    content: '';
    top: 2px;
    left: 2px;
    width: 8px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  &::before {
    position: absolute;
    content: '';
    top: 2px;
    left: 10px;
    width: calc(100% - 14px);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
  }
`

const textAnimation = keyframes`
  0% { background-position: 0% 0; color:rgba(255,255,255,1); }
  40% { background-position: 50% 0; color:rgba(191,191,191,1); }
  60% { background-position: 50% 0; color:rgba(0,0,0,0); }
  100% { background-position: 100% 0; color:rgba(0,0,0,0); }
`

const textStyle = (size: string | number): SerializedStyles => css`
  display: inline-block;
  position: relative;
  font-size: ${typeof size === 'string' ? size : size + 'px'};
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);

  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0% 33.33%,
    rgba(191, 191, 191, 1) 33.33% 66.66%,
    rgba(255, 255, 255, 0) 66.66% 100%
  );
  background-position: 100% 0;
  background-size: 300% 100%;

  animation-name: ${textAnimation};
  animation-duration: 0.6s;
  animation-direction: reverse;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: calc(100% - 2px);
    height: 1px;
    background-color: rgba(255, 255, 255, 1);
    border: solid 1px rgba(0, 0, 0, 0.8);
  }

  &::before {
    position: absolute;
    content: '';
    top: 35%;
    right: 4px;
    width: 3px;
    height: 35%;
    background-color: rgba(255, 255, 255, 0.8);
  }

  &::selection {
    background: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }
`

interface HeadingProps {
  content: string
  size?: number | string
}

export const Heading2 = memo(
  ({ content, size = '1.375rem' }: HeadingProps): React.JSX.Element => {
    return (
      <>
        <AnimateOnView>
          <h2 css={headingStyle} id={content}>
            <span css={textStyle(size)}>{content}</span>
          </h2>
          <FragmentIdentifier content={content} />
        </AnimateOnView>
      </>
    )
  }
)

Heading2.displayName = 'Heading2'
