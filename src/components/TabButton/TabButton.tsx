import React from 'react'

export interface TabButtonProps {
  children?: React.ReactNode
  isSelected: boolean
  onSelect: () => void
}

const TabButton = (props: TabButtonProps) => {
  return (
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>
        {props.children}
      </button>
    </li>
  )
}

export default TabButton
