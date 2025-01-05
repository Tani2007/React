import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [teamName,setName] = useState()
  let name = "the Leader"
  let teamMates =["raj", "simran", "vaani" , "rahul", "siddharth" ]
  const nameCalc = () => {
    teamMates.forEach((currVal) => {
      return(currVal)
    })
  }
  return (
    <>
      <h1>Hey this is Tanishq Saxena {name} and hit teamates {nameCalc()}</h1>
    </>
  )
}

export default App
