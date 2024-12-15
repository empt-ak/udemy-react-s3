import CoreConcept from '../CoreConcept/CoreConcept.tsx'
import {CORE_CONCEPTS} from '../../data.ts'
import TabButton from '../TabButton/TabButton.tsx'

const Main = () => {
  return (
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(d => {
              return <CoreConcept {...d}/>
            })}
          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton>Components</TabButton>
                <TabButton>TSX</TabButton>
                <TabButton>Props</TabButton>
                <TabButton>State</TabButton>
            </menu>
        </section>
      </main>
  )
}


export default Main