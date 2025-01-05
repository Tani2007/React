import { useState } from "react"

export const Counter = () => {
    const[count,setCount] = useState(0)
    const handleInc = () => {
        setCount(count +1)
    }
    return(
        <>
        <h1>Counter increment</h1>
        <h2>{count}</h2>
        <button onClick={handleInc}>increment</button>
        </>
    )
}