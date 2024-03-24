/** @jsxImportSource @emotion/react */
'use client'

import React, { memo, useEffect, useState } from 'react'
import { type SerializedStyles, css, keyframes } from '@emotion/react'
import { createPortal } from 'react-dom'

const imageStyle = css`
  width: 100%;

  user-select: none;
  cursor: zoom-in;

  animation-name: ${keyframes`
    from { opacity: 0; };
    to { opacity: 1; };
  `};
  animation-fill-mode: both;
  animation-duration: 0.3s;
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

  user-select: none;
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

    const [base64ImageURI, setBase64ImageURI] = useState<string | null>(null)

    useEffect(() => {
      void (async () => {
        const response = await fetch(src)
        const blob = await response.blob()

        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
          const base64data = reader.result

          if (typeof base64data === 'string') {
            setBase64ImageURI(base64data)
          } else {
            setBase64ImageURI(null)
          }
        }
      })()
    }, [src])

    return (
      <>
        {base64ImageURI === null ? (
          <>LOADING</>
        ) : (
          <img
            css={imageStyle}
            src={base64ImageURI}
            alt={alt ?? ''}
            onClick={() => {
              setIsModalShown(true)
            }}
          />
        )}
        {createPortal(
          <div
            css={modalStyle(isModalShown)}
            onClick={() => {
              setIsModalShown(false)
            }}
          >
            {base64ImageURI != null && (
              <img src={base64ImageURI} alt={alt ?? ''} />
            )}
          </div>,
          document.body
        )}
      </>
    )
  }
)

ImageWithModal.displayName = 'ImageWithModal'
