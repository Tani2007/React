import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch = () => {
    const [isOn,setIsOn] = useState(false);

    const isonfunction = () => {
        if(isOn) {
            return "on";
        }
        else{
            return "off"
        }
    }
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    return(
        <>
        <h1 style={{textAlign:"center", color:"#985678"}}>ToggleSwitch <IoIosSwitch style={{ color:"#123456"}}/></h1>
        <div className="toggle-switch"
        style={{backgroundColor : isOn ? "green" : "red"}}
        onClick={() => handleToggleSwitch()}>
            <div className={`switch ${isonfunction()}`}>
                <span className="switch-state">{isonfunction()}</span>
            </div>
        </div>
        </>
    )
}