import CoreConcept from '../CoreConcept/CoreConcept.tsx'
import { CORE_CONCEPTS } from '../../data.ts'
import TabButton from '../TabButton/TabButton.tsx'

const Main = () => {
  const handleSelect = () => {
    console.log('clickity click')
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((d, i) => {
            return <CoreConcept key={'cc-' + i} {...d} />
          })}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton onSelect={handleSelect}>TSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>
        <div>Dynamic content</div>
      </section>
    </main>
  )
}

export default Main
