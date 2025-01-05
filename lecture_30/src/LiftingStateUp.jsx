import { useState } from "react"

export const LiftingState = () => {
    const [inputValue,setInputValue] = useState("");
    return(
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayComponent name={inputValue}/>
        </>
    )
}
const InputComponent =(props) => {
    //is neeche wale useState ko yaha create mat karo isko app me jaakar create karo
    // const [inputValue,setInputValue] = useState("");
    return(
        <>
        <input type="text" placeholder="enter anything" value={props.inputValue} onChange={(e)=> props.setInputValue(e.target.value)}/>
        </>
    )
}
const DisplayComponent = (props) => {
    return <p>your current input value is: {props.name}</p>
}