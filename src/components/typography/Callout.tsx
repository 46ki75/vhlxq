/** @jsxImportSource @emotion/react */
'use client'

import { type SerializedStyles, css, keyframes } from '@emotion/react'
import React, { memo } from 'react'
import { InfoIcon } from '../icons/InfoIcon'
import { type ColorType, colors } from '../../colors'
import { AnimateOnView } from '../utils/AnimateOnView'

const containerStyle = (
  color: ColorType,
  direction: 'row' | 'column'
): SerializedStyles => css`
  padding: 1rem;
  border-radius: 0.25rem;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0% 50%,
    ${color[100]} 50% 100%
  );
  background-size: 200% 100%;
  background-position: 100% 0%;

  animation-name: ${keyframes`
    to { background-position: 0% 0%; }
  `};
  animation-duration: 0.4s;
  animation-delay: 0.1s;
  animation-fill-mode: both;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  opacity: 0.9;

  display: flex;
  flex-direction: ${direction};
  justify-content: flex-start;
  gap: ${direction === 'column' ? '0.5rem' : '0.75rem'};
`

const headerStyle = (color: ColorType): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  div:last-child {
    color: ${color[900]};
  }
`

interface CalloutProps {
  color?: keyof typeof colors
  title?: string
  children: React.ReactNode
}

export const Callout = memo(
  ({ color = 'blue', title, children }: CalloutProps): React.JSX.Element => {
    return (
      <AnimateOnView>
        <div
          css={containerStyle(colors[color], title != null ? 'column' : 'row')}
        >
          {title != null ? (
            <>
              <div css={headerStyle(colors[color])}>
                <InfoIcon size={20} color={colors[color][900]} />
                <div>{title}</div>
              </div>
              <div style={{ paddingLeft: '2rem', opacity: 0.9 }}>
                {children}
              </div>
            </>
          ) : (
            <>
              <div>
                <InfoIcon size={20} color={colors[color][900]} />
              </div>
              <div style={{ opacity: 0.9 }}>{children}</div>
            </>
          )}
        </div>
      </AnimateOnView>
    )
  }
)

Callout.displayName = 'Callout'
