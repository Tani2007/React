export const EventHandling = () => {
    const handleButtonClick = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        alert("hey you basterd you clicked it ")
    }

    const handleUser = (user) => {
        console.log(`hey ${user}  how you doing`)
    }

    return(
        <>
            {/* <button onClick={handleButtonClick}>click me</button> */}
            {/* <button onClick={(event) => handleButtonClick(event)}>click me2</button> */}
            {/* <button onClick={(event) => console.log(event) }>inline Event</button> */}
            {/* <button onClick={() => alert("hey i'm inline event")}>inline arr  function</button> */}

            <button onClick={()=> handleUser("tanishq")}>user btn</button>
        </>
    )
}