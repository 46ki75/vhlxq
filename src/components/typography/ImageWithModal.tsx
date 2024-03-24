/** @jsxImportSource @emotion/react */
'use client'

import React, { memo, useEffect, useState } from 'react'
import { type SerializedStyles, css } from '@emotion/react'
import { createPortal } from 'react-dom'

const imageStyle = css`
  width: 100%;

  cursor: zoom-in;
`

const modalStyle = (isModalShown: boolean): SerializedStyles => css`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, ${isModalShown ? 0.6 : 0});
  backdrop-filter: blur(${isModalShown ? '0.125rem' : '0rem'});
  transition: all 0.2s;

  pointer-events: ${isModalShown ? 'all' : 'none'};

  cursor: zoom-out;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    transition: all 0.2s;
    opacity: ${isModalShown ? 1 : 0};
  }
`

interface ImageWithModalProps {
  src: string
  alt?: string
}

export const ImageWithModal = memo(
  ({ src, alt }: ImageWithModalProps): React.JSX.Element => {
    const [isModalShown, setIsModalShown] = useState<boolean>(false)

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsModalShown(false)
      }
    }

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])

    return (
      <>
        <img
          css={imageStyle}
          src={src}
          alt={alt ?? ''}
          onClick={() => {
            setIsModalShown(true)
          }}
        />
        {createPortal(
          <div
            css={modalStyle(isModalShown)}
            onClick={() => {
              setIsModalShown(false)
            }}
          >
            <img src={src} alt={alt ?? ''} />
          </div>,
          document.body
        )}
      </>
    )
  }
)

ImageWithModal.displayName = 'ImageWithModal'
