/** @jsxImportSource @emotion/react */
'use client'

import React, { useState, type ReactNode, memo } from 'react'
import { type SerializedStyles, css } from '@emotion/react'

const detailsStyle = css``

const summaryStyle = (isOpen: boolean): SerializedStyles => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${isOpen ? '0.25rem 0.25rem 0 0' : '0.25rem'};
  background-color: rgba(0, 0, 0, 0.02);

  cursor: pointer;
  user-select: none;
  padding: 0.75rem;
  border: solid 1px rgba(0, 0, 0, 0.25);
`

const childrenStyle = (isOpen: boolean): SerializedStyles => css`
  padding: 0.75rem;
  border: solid 1px rgba(0, 0, 0, 0.25);
  border-top: none;

  border-radius: 0 0 0.25rem 0.25rem;

  transition: all 0.2s ${isOpen ? '0s' : '0.2s'};

  transform-origin: 50% 0%;
  transform: scaleY(${isOpen ? 1 : 0});
  height: ${isOpen ? '100%' : 0};

  div {
    transition: opacity 0.2s ${isOpen ? '0.2s' : '0s'};
    opacity: ${isOpen ? 1 : 0};
  }
`

const foldButtonStyle = (isOpen: boolean): SerializedStyles => css`
  padding: 0.5rem 0;

  opacity: ${isOpen ? 0.7 : 0};
  transition: all 0.1s;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;
`

interface ToggleProps {
  /**
   * **required!**
   *
   * The string that is displayed on the header of a collapsible tab.
   * It is always visible, whether the tab is collapsed or not.
   */
  summary: string
  /**
   * **required!**
   *
   * The contents of the collapsed content. Please enclose it within a `<Toggle>` tag.
   */
  children: ReactNode
}

export const Toggle = memo(
  ({ summary, children }: ToggleProps): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <details
          css={detailsStyle}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <summary css={summaryStyle(isOpen)}>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={12}
                height={12}
                opacity={0.6}
                viewBox='0 0 352 512'
                css={css`
                  margin-right: 0.5rem;
                  transition: all 0.2s;
                  transform: rotateZ(${isOpen ? '180deg' : '45deg'});
                `}
              >
                <path
                  d='M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z'
                  fill='darkgreen'
                />
              </svg>
              <span>{summary}</span>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={12}
              viewBox='0 0 448 512'
              css={css`
                transform: rotateX(${isOpen ? '180deg' : '0deg'});
                transition: all 0.2s;
              `}
            >
              <path d='M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z' />
            </svg>
          </summary>
        </details>
        <div css={childrenStyle(isOpen)}>
          <div>{children}</div>
        </div>
        <div
          css={foldButtonStyle(isOpen)}
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={12}
            height={12}
            viewBox='0 0 352 512'
          >
            <path d='M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z' />
          </svg>
          <span>FOLD</span>
        </div>
      </>
    )
  }
)

Toggle.displayName = 'Toggle'
