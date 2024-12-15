export interface TabButtonProps {
    children?: React.ReactNode
}
const TabButton = (props: TabButtonProps) => {
    return (
        <li><button>{props.children}</button></li>
    )
}

export default TabButton