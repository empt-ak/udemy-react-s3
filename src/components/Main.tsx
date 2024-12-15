import CoreConcept from './CoreConcept.tsx'
import {CORE_CONCEPTS} from '../data.ts'

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
      </main>
  )
}


export default Main