import React from 'react'

export interface TabButtonProps {
    children?: React.ReactNode
}

const TabButton = (props: TabButtonProps) => {
    const handleClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(ev)
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}

export default TabButton
