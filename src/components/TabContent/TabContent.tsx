interface TabContentProps {
  title: string
  code: string
  description: string
}

const TabContent = (props: TabContentProps) => {
  return (
    <div id="tab-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>
        <code>{props.code}</code>
      </pre>
    </div>
  )
}

export default TabContent
