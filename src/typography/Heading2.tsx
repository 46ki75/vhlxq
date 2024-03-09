/** @jsxImportSource @emotion/react */

import React, { memo, useEffect, useRef, useState } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { useInView } from 'framer-motion'

const headingStyle = css`
  width: 100%;
  position: relative;
  margin: 0;

  font-size: 1.5rem;
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

const textStyle = css`
  display: inline-block;
  position: relative;
  font-size: 22px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);

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
  animation-duration: 0.4s;
  animation-direction: reverse;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: calc(100% - 18px);
    height: 1px;
    background-color: rgba(255, 255, 255, 1);
    border: solid 1px rgba(0, 0, 0, 0.8);
  }

  &::before {
    position: absolute;
    content: '';
    top: 35%;
    right: 20px;
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
}

export const Heading2 = memo(({ content }: HeadingProps): React.JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [isInView])

  return (
    <>
      <h2 css={headingStyle} ref={ref}>
        <span css={textStyle} key={animationKey}>
          {content}
        </span>
      </h2>
      <LinkCopy content={content} />
    </>
  )
})

Heading2.displayName = 'Heading2'

const linkCopyContainerStyle = css`
  margin: 0;
  margin-top: 0.25rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: top;
  gap: 0.5rem;
`

const iconStyle = css`
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`

const messageStyle = (isVisible: boolean): SerializedStyles => css`
  font-size: 0.5rem;
  font-family: sans-serif;
  user-select: none;
  opacity: ${isVisible ? 1 : 0};
  transition: all 0.3s;
`

interface LinkCopyProps {
  content: string
}

const LinkCopy = memo(({ content }: LinkCopyProps): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (isVisible) {
      timerId = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    return () => {
      if (timerId != null) {
        clearTimeout(timerId)
      }
    }
  }, [isVisible])

  return (
    <div css={linkCopyContainerStyle}>
      <span css={messageStyle(isVisible)}>
        A link with a fragment identifier has been copied.
      </span>
      <a href={'#' + content}>
        <svg css={iconStyle} width={16} height={16} viewBox='0 0 576 512'>
          <path
            d='M13 352h32.4C67.2 454.7 181.9 512 288 512c106.2 0 220.9-57.4 242.6-160h32.4c10.7 0 16-12.9 8.5-20.5l-67-67c-4.7-4.7-12.3-4.7-17 0l-67 67c-7.6 7.6-2.2 20.5 8.5 20.5h35.1c-20.3 54.3-85 86.6-144.1 94V256h52c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-52v-5.5c37.3-13.2 64-48.7 64-90.5C384 43.8 341.6 .7 289.4 0 235.7-.7 192 42.5 192 96c0 41.8 26.7 77.4 64 90.5V192h-52c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h52v190c-58.9-7.4-123.8-39.7-144.1-94h35.1c10.7 0 16-12.9 8.5-20.5l-67-67c-4.7-4.7-12.3-4.7-17 0L4.5 331.5C-3.1 339.1 2.3 352 13 352zM288 64c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32z'
            fill='#7996d4'
          />
        </svg>
      </a>

      <svg
        css={iconStyle}
        viewBox='0 0 512 512'
        width={16}
        height={16}
        onClick={() => {
          const currentUrl = window.location.href
          const urlWithoutHash = currentUrl.split('#')[0]

          navigator.clipboard
            .writeText(urlWithoutHash + '#' + content)
            .then(() => {
              setIsVisible(true)
            })
            .catch(() => {})
        }}
      >
        <path
          d='M326.6 185.4c59.7 59.8 58.9 155.7 .4 214.6-.1 .1-.2 .3-.4 .4l-67.2 67.2c-59.3 59.3-155.7 59.3-215 0-59.3-59.3-59.3-155.7 0-215l37.1-37.1c9.8-9.8 26.8-3.3 27.3 10.6 .6 17.7 3.8 35.5 9.7 52.7 2 5.8 .6 12.3-3.8 16.6l-13.1 13.1c-28 28-28.9 73.7-1.2 102 28 28.6 74.1 28.7 102.3 .5l67.2-67.2c28.2-28.2 28.1-73.8 0-101.8-3.7-3.7-7.4-6.6-10.3-8.6a16 16 0 0 1 -6.9-12.6c-.4-10.6 3.3-21.5 11.7-29.8l21.1-21.1c5.5-5.5 14.2-6.2 20.6-1.7a152.5 152.5 0 0 1 20.5 17.2zM467.5 44.4c-59.3-59.3-155.7-59.3-215 0l-67.2 67.2c-.1 .1-.3 .3-.4 .4-58.6 58.9-59.4 154.8 .4 214.6a152.5 152.5 0 0 0 20.5 17.2c6.4 4.5 15.1 3.8 20.6-1.7l21.1-21.1c8.4-8.4 12.1-19.2 11.7-29.8a16 16 0 0 0 -6.9-12.6c-2.9-2-6.6-4.9-10.3-8.6-28.1-28.1-28.2-73.6 0-101.8l67.2-67.2c28.2-28.2 74.3-28.1 102.3 .5 27.8 28.3 26.9 73.9-1.2 102l-13.1 13.1c-4.4 4.4-5.8 10.8-3.8 16.6 5.9 17.2 9 35 9.7 52.7 .5 13.9 17.5 20.4 27.3 10.6l37.1-37.1c59.3-59.3 59.3-155.7 0-215z'
          fill='#7996d4'
        />
      </svg>
    </div>
  )
})
LinkCopy.displayName = 'LinkCopy'
