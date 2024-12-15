import reactCoreConcepts from '../assets/react-core-concepts.png'

const descriptions = ['Fundamental', 'Crucial', 'Core']

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {
  const description = descriptions[getRandomInt(2)]
  return (
      <header>
        <img src={reactCoreConcepts} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header