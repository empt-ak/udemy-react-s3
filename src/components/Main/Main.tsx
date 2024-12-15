import CoreConcept from '../CoreConcept/CoreConcept.tsx'
import { CORE_CONCEPTS } from '../../data.ts'
import TabButton from '../TabButton/TabButton.tsx'

const Main = () => {
  const handleSelect = (selectedButton: 'component' | 'tsx' | 'state' | 'props') => {
    console.log('clickity click ' + selectedButton)
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
          <TabButton onSelect={() => handleSelect('component')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('tsx')}>TSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div>Dynamic content</div>
      </section>
    </main>
  )
}

export default Main
