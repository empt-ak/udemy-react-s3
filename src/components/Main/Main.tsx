import CoreConcept from '../CoreConcept/CoreConcept.tsx'
import { CORE_CONCEPTS, ExampleSection } from '../../data.ts'
import TabButton from '../TabButton/TabButton.tsx'
import { useState } from 'react'

import { EXAMPLES } from '../../data.ts'
import TabContent from '../TabContent/TabContent.tsx'

type ButtonType = 'components' | 'tsx' | 'state' | 'props'

const Main = () => {
  const [selected, setSelected] = useState<ExampleSection | null>(null)
  const [selectedTab, setSelectedTab] = useState<ButtonType | null>(null)

  const handleSelect = (selectedButton: ButtonType) => {
    setSelected(EXAMPLES[selectedButton])
    setSelectedTab(selectedButton)
  }

  let tabContent = <p>select something</p>

  if (selected) {
    tabContent = <TabContent {...selected} />
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
          {Object.keys(EXAMPLES).map((d, i) => {
            return (
              <TabButton key={'examples-' + i} isSelected={selectedTab === d} onSelect={() => handleSelect(d as ButtonType)}>
                {EXAMPLES[d].title}
              </TabButton>
            )
          })}
        </menu>
        {tabContent}
      </section>
    </main>
  )
}

export default Main
