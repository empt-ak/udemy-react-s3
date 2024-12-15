import CoreConcept from '../CoreConcept/CoreConcept.tsx'
import { CORE_CONCEPTS, ExampleSection } from '../../data.ts'
import TabButton from '../TabButton/TabButton.tsx'
import { useState } from 'react'

import { EXAMPLES } from '../../data.ts'

type ButtonType = 'components' | 'tsx' | 'state' | 'props'

const Main = () => {
  const [selected, setSelected] = useState<ExampleSection>(EXAMPLES['components'])

  const handleSelect = (selectedButton: ButtonType) => {
    setSelected(EXAMPLES[selectedButton])
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
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('tsx')}>TSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <pre>
            <code>{selected.code}</code>
          </pre>
        </div>
      </section>
    </main>
  )
}

export default Main
