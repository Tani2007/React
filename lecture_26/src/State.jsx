import { useState } from "react";
export const State = () => {
    const[count,setCount] = useState(0);
    // the below line of console is bart of lecture_27
    console.log("parent compononent rendered")
    let handleclick = () => {
        setCount(() => count + 1)
    }
    
    return(
        <>
        <h1>{count}</h1>
        <h1><button onClick={() => handleclick()}>Increment</button></h1>
        {/* lecture 27 part below*/}
        <ChildComponent count={count}/>
        </>
    )
}
function ChildComponent(props) {
    console.log("Child Component rendered")
    return(
        <div>
        <h1>CHILD COMPONENT {props.count}</h1>
        </div>
    )
}

