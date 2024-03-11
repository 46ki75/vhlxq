/** @jsxImportSource @emotion/react */
'use client'

import React, { memo } from 'react'
import { css, keyframes } from '@emotion/react'

const linkStyle = css`
  all: unset;
  font-family: sans-serif;
  color: #5276c2;

  border-bottom: dashed 1px rgba(183, 197, 228, 1);

  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  width: min-content;
  padding: 0.125rem 0.25rem 0 0.25rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    #d8e0f8 50% 100%
  );
  background-size: 100% 200%;
  background-position: 0% 0%;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-bottom: dashed 1px rgba(183, 197, 228, 0);
    background-position: 0% 100%;
    border-radius: 0.25rem;
  }

  &:active {
    transform: scale(0.95);
  }

  cursor: pointer;
  transition: all 0.1s;
`

const blinkStyle = css`
  animation-name: ${keyframes`    
    from{ opacity: 0.2 }
    to{ opacity: 1 }
  `};
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

interface LinktextProps {
  href: string
  external?: boolean
}

export const Linktext = memo(
  ({ href, external }: LinktextProps): React.JSX.Element => {
    return (
      <a
        href={href}
        target={external ?? false ? '_blank' : '_top'}
        rel={external ?? false ? 'external noreferrer noopener' : ''}
        css={linkStyle}
      >
        <span>Linktext</span>
        {external ?? false ? (
          <svg
            css={blinkStyle}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            width={12}
            height={12}
          >
            <path
              d='M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z'
              fill='#7996d4'
            />
          </svg>
        ) : (
          <svg
            css={blinkStyle}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 192 512'
            width={6}
            height={16}
          >
            <path
              d='M0 384.7V127.3c0-17.8 21.5-26.7 34.1-14.1l128.7 128.7c7.8 7.8 7.8 20.5 0 28.3L34.1 398.8C21.5 411.4 0 402.5 0 384.7z'
              fill='#7996d4'
            />
          </svg>
        )}
      </a>
    )
  }
)

Linktext.displayName = 'Linktext'
