import { useState } from "react";


export const DerivedState =() =>{
    const[user,setUser] = useState([
        {name:"Alice",age :25},
        {name:"Bob",age :30},
        {name:"Jhon",age :35},
        {name:"Charlie",age :45},
    ])
    console.log(user)
    const userCount = user.length

    const avgAge = user.reduce((accum,currElem) => {
        return accum + currElem.age;
    },0)
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
            <h1>Total user = {userCount}</h1>
            <h1>
                Toatal age = {Math.floor(avgAge/userCount)}
            </h1>
        </div>
    )
}