/** @jsxImportSource @emotion/react */
'use client'

import React, { memo, useEffect, useRef, useState } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { useInView } from 'framer-motion'

const fadeIn = keyframes`
  from{ opacity: 0 }
  to{ opacity: 1 }
`

const wrapperStyle = css`
  width: 100%;
  font-family: sans-serif;
`

const breadcrumbStyle = css`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
`

const liStyle = css`
  all: unset;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

const linkStyle = css`
  all: unset;
  padding: 0.25rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: rgba(226, 233, 243, 0.8);
  }
`

const iconStyle = (index: number): SerializedStyles => css`
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-delay: ${0.3 * index}s;
`

const labelStyle = (index: number): SerializedStyles => css`
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-delay: ${0.1 + 0.3 * index}s;
`

const arrowStyle = (index: number): SerializedStyles => css`
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-delay: ${0.2 + 0.3 * index}s;
`

interface BreadcrumbProps {
  /**
   * **required!**
   *
   * An array of objects with keys for the URL path and display name label.
   *
   * - href: The URL path to navigate to.
   * - label: The display name.
   */
  links: Array<{
    href: string
    label: string
  }>
}

export const Breadcrumb = memo(
  ({ links }: BreadcrumbProps): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
      setAnimationKey((prevKey) => prevKey + 1)
    }, [isInView])

    return (
      <nav aria-label='Breadcrumb' css={wrapperStyle} ref={ref}>
        <ol css={breadcrumbStyle} key={animationKey}>
          {links.map((link, index) => (
            <a css={linkStyle} href={link.href} key={index}>
              <li css={liStyle}>
                {index === 0 ? (
                  <svg
                    css={iconStyle(index)}
                    width={16}
                    height={16}
                    viewBox='0 0 576 512'
                  >
                    <path
                      d='M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z'
                      fill='#5eaf87'
                    />
                  </svg>
                ) : index !== links.length - 1 ? (
                  <svg
                    css={iconStyle(index)}
                    width={16}
                    height={16}
                    viewBox='0 0 512 512'
                  >
                    <path
                      d='M464 128H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z'
                      fill='#7996d4'
                    />
                  </svg>
                ) : (
                  <svg
                    css={iconStyle(index)}
                    width={12}
                    height={16}
                    viewBox='0 0 384 512'
                  >
                    <path
                      d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'
                      fill='#7996d4'
                    />
                  </svg>
                )}
                <span css={labelStyle(index)}>{link.label}</span>
                {index !== links.length - 1 && (
                  <svg
                    css={arrowStyle(index)}
                    width={6}
                    height={16}
                    viewBox='0 0 192 512'
                  >
                    <path
                      d='M0 384.7V127.3c0-17.8 21.5-26.7 34.1-14.1l128.7 128.7c7.8 7.8 7.8 20.5 0 28.3L34.1 398.8C21.5 411.4 0 402.5 0 384.7z'
                      fill='#d9e3e6'
                    />
                  </svg>
                )}
              </li>
            </a>
          ))}
        </ol>
      </nav>
    )
  },
  (prevProps, nextProps) => {
    for (const [index, link] of prevProps.links.entries()) {
      if (
        link.href !== nextProps.links[index].href ||
        link.label !== nextProps.links[index].label
      ) {
        return false
      }
    }
    return true
  }
)

Breadcrumb.displayName = 'Breadcrumb'
