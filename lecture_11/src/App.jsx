import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { NetflixSeries,Footer } from "./components/NetflixSeries";

function App() {

  return (
    <>
      < Footer />
      < NetflixSeries />
      < NetflixSeries />
      < NetflixSeries />
    </>
  )
}

export default App
