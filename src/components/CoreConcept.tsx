interface CoreConceptProps {
  title: string
  description: string
  image: string
  children?: React.ReactElement;
  style?: React.CSSProperties;
}

const CoreConcept = (props: CoreConceptProps) => {
  return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
  )
}

export default CoreConcept