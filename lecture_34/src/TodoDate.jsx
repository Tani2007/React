import { useState } from "react";
export const TodoDate = () => {
    const[dateTime, setTime] = useState("")
    
    setInterval(() => {
        let date = new Date()
        let localTimeString = date.toLocaleTimeString();
        let localDateString = date.toLocaleDateString();
        setTime(`${localDateString} - ${localTimeString}`)
     }, 1000);
    return <h2 className="date-time">{dateTime}</h2>;
    
}