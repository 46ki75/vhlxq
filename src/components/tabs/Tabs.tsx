/** @jsxImportSource @emotion/react */
'use client'
import React, {
  type ReactElement,
  useState,
  Children,
  memo,
  useRef,
  useEffect
} from 'react'
import { type SerializedStyles, css } from '@emotion/react'

const tabsWrapperStyle = css`
  width: 100%;
  position: relative;
  display: flex;

  flex-direction: column;

  * {
    font-family: sans-serif;
  }
`

const labelContainerStyle = css`
  width: 100%;

  border-bottom: solid 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;

  background-color: rgba(0, 0, 0, 0.02);
`

const labelStyle = (isActive: boolean): SerializedStyles => css`
  all: unset;

  box-sizing: border-box;
  padding: 0.75rem 1.25rem;

  position: relative;

  background-color: ${isActive ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0)'};

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: ${isActive ? '100%' : '0%'};
    height: 3px;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s cubic-bezier(0.5, 0, 0.25, 1);
  }

  user-select: none;
  cursor: ${isActive ? 'default' : 'pointer'};
  transition: all 0.5s;
`

const tabStyle = css`
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  width: 100%;
`

const tabContentStyle = (isActive: boolean): SerializedStyles => css`
  * {
    max-width: 100%;
  }
  opacity: ${isActive ? 1 : 0};
  transform: translateX(${isActive ? '0px' : '-200px'});
  transition:
    opacity 0.2s ease-in-out,
    transform 0.15s cubic-bezier(0.5, 0, 0.25, 1);
`

const svgStyle = (height: number): SerializedStyles => css`
  width: 100%;
  position: absolute;
  top: ${height}px;
  transition: all 0.2s;
`

interface TabsProps {
  children: Array<ReactElement<TabProps>> | ReactElement<TabProps>
}

export const Tabs = memo(({ children }: TabsProps): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(0)
  const [tabHeight, setTabHeight] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const tabRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (tabRef.current != null && headerRef.current != null) {
        setTabHeight(
          tabRef.current.clientHeight + headerRef.current.clientHeight
        )
      }
    })

    if (tabRef.current != null && headerRef.current != null) {
      resizeObserver.observe(tabRef.current)
      resizeObserver.observe(headerRef.current)
    }

    return () => {
      if (tabRef.current != null) {
        resizeObserver.unobserve(tabRef.current)
      }
      if (headerRef.current != null) {
        resizeObserver.unobserve(headerRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [activeTab])

  return (
    <div css={tabsWrapperStyle}>
      <div css={labelContainerStyle} ref={headerRef}>
        {Children.map(children, (child, index) => (
          <button
            key={index}
            css={labelStyle(index === activeTab)}
            onClick={() => {
              setActiveTab(index)
            }}
          >
            {(child as React.ReactElement<any>).props.label}
          </button>
        ))}
      </div>
      <div css={tabStyle} ref={tabRef}>
        {Children.map(children, (child, index) => (
          <div key={index} css={tabContentStyle(index === activeTab)}>
            {index === activeTab ? child : null}
          </div>
        ))}
      </div>
      <svg css={svgStyle(tabHeight)} height={5}>
        <line x1={'0%'} x2={'90%'} y1={1} y2={1} stroke='black' opacity={0.6} />
        <line
          x1={'90%'}
          x2={'100%'}
          y1={2}
          y2={2}
          stroke='black'
          opacity={0.6}
          strokeWidth={3}
        />
      </svg>
    </div>
  )
})

Tabs.displayName = 'Tabs'

interface TabProps {
  label: string
  children: React.ReactNode
}

export const Tab = memo(({ children }: TabProps): React.JSX.Element => {
  return <>{children}</>
})

Tab.displayName = 'Tab'
