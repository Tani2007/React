import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  {/* creating component */}
  const JioCinema = () => {
    return(
      <>
      <div><img src="https://m.media-amazon.com/images/M/MV5BMTc1Mzc1ODMxMF5BMl5BanBnXkFtZTcwNDY1MzU1MQ@@._V1_.jpg" /></div>
      <h2>Name: Definitely Maybe
      </h2>
      <h3>Rating: 7.1</h3>
      <p>“Definitely, Maybe” is a romantic comedy about Will Hayes, a political consultant in the midst of a divorce. His 10-year-old daughter, Maya, asks him to tell the story of how he met her mother. Will recounts his past relationships with three women, changing their names so Maya has to guess which one is her mom. Through this journey, both Will and Maya learn about love, relationships, and the possibility of happy endings</p>
      </>
    )
  }
  return (
    <>
    {/* using components */}
      <JioCinema/>
      <JioCinema/>
      <JioCinema/>
    </>
  )
}

export default App
