export const EventPropogation = () => {

    const handleGclick = () => {
        console.log("G-clicked")
    }
    const handlePclick = (event) => {
        console.log("P-clicked")
        event.stopPropagation();
        console.log(event.target)//jis tag ke andar yeh hai ye bas use target karta hai 
    }
    const handleCclick = (event) => {
        console.log(event.target)//jis tag ke andar yeh hai ye bas use target karta hai 
        event.stopPropagation();
        console.log("C-clicked")
        
    }
    return(
        
        <div onClick={handleGclick}>GrandParent
            <div onClick={handlePclick}>Parent
                <button onClick={handleCclick}>Child div</button>
            </div>
        </div>
        
    )
}