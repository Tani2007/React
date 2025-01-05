import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  {/* creating component */}
  const JioCinema = () => {
    //that's how we insert JS variable in JSX.
    let name = "Crazy, Stupid,Love"//we will insert this variable in JSX code 

    let img = "https://m.media-amazon.com/images/S/pv-target-images/d2d38b0dc7d782341b1256f77b3f0b56cea3ff997d624776ff5b0084115928a1.jpg"

    let summary = "A middle-aged man, after a divorce, learns to date again with help from a young bachelor, leading to unexpected romantic entanglements."

    let returnGenre = () => {
      let Genre = "Rom-Com"
      return Genre;
    }


    return( 
      <>
      <div><img src={img} /></div>
      <h2>Name: {name}
      </h2>
      <h3>Rating: 7.1</h3>
      <p>{summary}</p>
      <p>Genre: {returnGenre()}</p>
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
