import React from 'react'

export interface TabButtonProps {
  children?: React.ReactNode
  onSelect: () => void
}

const TabButton = (props: TabButtonProps) => {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  )
}

export default TabButton
