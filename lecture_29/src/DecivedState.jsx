import { useState } from "react";
/*
let user = [
    {name:"Alice",age :25},
    {name:"Bob",age :30},
    {name:"Jhon",age :35},
    {name:"Charlie",age :45},
];


export const DecivedState =() =>{
    return (
        <div className="className">
            <h1>User List</h1>
            <ul>
            {user.map((currElem,index) => {
        return(
            <li key={index}>
                {currElem.name} - {currElem.age}
            </li>
        )
        })}
            </ul>
        </div>
    )
}
*/
// by using hook state



export const DecivedState =() =>{
    const[user,setUser] = useState([
        {name:"Alice",age :25},
        {name:"Bob",age :30},
        {name:"Jhon",age :35},
        {name:"Charlie",age :45},
    ])
    return (
        <div className="className">
            <h1>User List</h1>
            <ul>
            {user.map((currElem,index) => {
        return(
            <li key={index}>
                {currElem.name} - {currElem.age}
            </li>
        )
        })}
            </ul>
        </div>
    )
}