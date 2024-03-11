/** @jsxImportSource @emotion/react */
'use client'

import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AnimateOnViewProps {
  children: React.ReactNode
}

export const AnimateOnView = ({
  children
}: AnimateOnViewProps): React.JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [isInView])

  return (
    <div ref={ref}>
      <div key={animationKey}>{children}</div>
    </div>
  )
}
