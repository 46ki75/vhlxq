/** @jsxImportSource @emotion/react */
'use client'

import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AnimateOnViewProps {
  children: React.ReactNode
}

/**
 * When a component passed to children re-renders every time it enters the viewport,
 * this causes components with animations set by keyframes to replay the animation
 * each time they enter the viewport.
 *
 * ## Usage:
 *
 * ```tsx
 * import React from 'react'
 * import { AnimateOnView } from './AnimateOnView'
 *
 * export const MyComponent = (): React.JSX.Element => {
 *   return (
 *     <AnimateOnView>
 *       <div>Animation</div>
 *     </AnimateOnView>
 *   )
 * }
 * ```
 *
 */
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
    <div style={{ display: 'inline' }} ref={ref}>
      <div style={{ display: 'inline' }} key={animationKey}>
        {children}
      </div>
    </div>
  )
}
