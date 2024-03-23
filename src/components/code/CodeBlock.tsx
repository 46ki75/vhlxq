/** @jsxImportSource @emotion/react */
'use client'

import React, { Suspense, memo, useCallback } from 'react'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { Global, type SerializedStyles, css, keyframes } from '@emotion/react'

import {
  oneDark,
  oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism'

const SyntaxHighlighterAsync = React.lazy(
  async () =>
    await import('react-syntax-highlighter').then((module) => ({
      default: module.Prism
    }))
)

const style = css`
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: center;

  box-shadow: 0 0 0.25rem rgba($color: #000000, $alpha: 0.4);
  border-radius: 0.25rem;

  & *::selection {
    background: #b8e7c5;
    color: #000;
  }

  & > *::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  & > *::-webkit-scrollbar-thumb {
    background-color: rgba(124, 148, 197, 0.8);
    border-radius: 3px;
    opacity: 0.6;
  }

  & > *::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }
`

const header = (theme: 'light' | 'dark'): SerializedStyles => css`
  box-sizing: border-box;
  width: 100%;
  padding: 0.55rem 0.75rem 0.25rem 0.75rem;
  margin: 0;
  border-radius: 0.25rem 0.25rem 0 0;

  font-family: sans-serif;
  font-size: 0.8em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  background-color: ${theme === 'light'
    ? 'rgb(250, 250, 250)'
    : 'rgb(40, 44, 52)'};

  color: ${theme === 'light'
    ? 'rgba(0, 0, 0, 0.8)'
    : 'rgba(255, 255, 255, 0.8)'};

  div.caption {
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.copy {
    padding: 0.25rem;

    cursor: pointer;
    position: relative;
    transition: 0.1s;

    border-radius: 10%;

    white-space: nowrap;

    &:hover {
      scale: 1.01;
      background-color: ${theme === 'light'
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(255, 255, 255, 0.2)'};
    }

    &:active {
      scale: 0.99;
    }
  }
`

const hrStyle = (theme: 'light' | 'dark'): SerializedStyles => css`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  background-color: ${theme === 'light'
    ? 'rgb(250, 250, 250)'
    : 'rgb(40, 44, 52)'};

  hr {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: calc(100% - 1rem);
    border: none;
    border-bottom: solid 1px
      ${theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
  }
`

const CodeBlockBase = ({
  code,
  language = 'txt',
  caption = language,
  theme = 'light',
  isLoading = false
}: {
  /**
   * A string of source code that you want to add syntax highlighting to.
   */
  code: string
  /**
   * The language of the source code.
   */
  language?: string
  /**
   * A caption displayed in the title header part of the source code,
   * which is easier to understand if you input a file name or similar.
   * The default value is the same as the language.
   */
  caption?: string
  /**
   * Light theme / Dark theme.
   */
  theme?: 'light' | 'dark'
  /**
   * Whether it is currently loading or not.
   * A fallback is displayed on the caption and code parts while loading.
   */
  isLoading?: boolean
}): React.JSX.Element => {
  const copyText = useCallback(async (): Promise<void> => {
    await navigator.clipboard.writeText(code)
  }, [code])

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Courier Prime');

          * {
            font-family: 'Courier Prime', monospace;
            font-weight: 400;
            font-style: normal;
          }
        `}
      />

      <div css={style}>
        {/* HEADER # -------------------------------------------------- */}
        <div css={header(theme)}>
          {/* CAPTION # -------------------------------------------------- */}
          <div className='caption'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              viewBox='0 0 640 512'
            >
              <path
                d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3 .8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2 .6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7 .8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'
                fill={
                  theme === 'light'
                    ? 'rgba(0, 0, 0, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)'
                }
              />
            </svg>
            {caption}
          </div>

          {/* COPY BUTTON # -------------------------------------------------- */}
          <div
            className='copy'
            onClick={() => {
              void copyText()
            }}
          >
            <svg width={16} height={16} viewBox='0 0 384 512'>
              <path
                d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z'
                fill={
                  theme === 'light'
                    ? 'rgba(0,0,0,0.7)'
                    : 'rgba(255,255,255,0.7)'
                }
              />
            </svg>
          </div>
        </div>

        {/* DIVIDER # -------------------------------------------------- */}
        <div css={hrStyle(theme)}>
          <hr />
        </div>

        {/* CODE # -------------------------------------------------- */}
        {isLoading ? (
          <FallBack theme={theme} />
        ) : (
          <Suspense fallback={<FallBack theme={theme} />}>
            <SyntaxHighlighterAsync
              language={language}
              style={theme === 'light' ? oneLight : oneDark}
              customStyle={{
                margin: 0,
                borderRadius: '0 0 0.25rem 0.25rem',
                fontSize: '0.9rem'
              }}
              css={css`
                font-family: 'Courier Prime', monospace;
                font-weight: 400;
                font-style: normal;
              `}
            >
              {code.trim()}
            </SyntaxHighlighterAsync>
          </Suspense>
        )}
      </div>
    </>
  )
}

export const CodeBlock = memo(CodeBlockBase)

export const FallBack = memo(
  ({ theme }: { theme: 'light' | 'dark' }): React.JSX.Element => {
    const style = css`
      width: 100%;
      padding: 3rem 0;

      background-color: ${theme === 'light'
        ? 'rgb(250, 250, 250)'
        : 'rgb(40, 44, 52)'};

      display: flex;
      justify-content: center;
      align-items: center;

      div {
        animation-name: ${keyframes`
        from { opacity: 0; }
        to { opacity: 1; }
    `};
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    `

    return (
      <div css={style}>
        <div>LOADING</div>
      </div>
    )
  }
)

FallBack.displayName = 'FallBack'
