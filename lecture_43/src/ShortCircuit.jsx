import { useState } from "react";

const ShortCircuitExample = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true)
    const [user,setUser] = useState()
    
    return (
        <section >
            <h1>welcome to Short Circuit Evalu</h1>


            {isLoggedIn && <p>you are logged in</p>}

            {user ? `Hello${user}` : <p>Set up your profile</p>}



            <div>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Togle Login State</button>
                <button onClick={() => setUser("Tanishq Saxena")}>Set Profile </button>

            <button onClick={() => setUser("")}>Clear profile</button>
            </div>
        </section>
    )
}
export default ShortCircuitExample;