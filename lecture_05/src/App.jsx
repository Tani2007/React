import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hey how you doing</h1>
      <h2>always use enclosing tags in jsx </h2> */}

      {/* now we will create a card of movie review */}
      <div><img src="Definitely Maybe.jpg" /></div>
      <h2>Name: Definitely Maybe
      </h2>
      <h3>Rating: 7.1</h3>
      <p>“Definitely, Maybe” is a romantic comedy about Will Hayes, a political consultant in the midst of a divorce. His 10-year-old daughter, Maya, asks him to tell the story of how he met her mother. Will recounts his past relationships with three women, changing their names so Maya has to guess which one is her mom. Through this journey, both Will and Maya learn about love, relationships, and the possibility of happy endings</p>
    </>
  )
}

export default App
