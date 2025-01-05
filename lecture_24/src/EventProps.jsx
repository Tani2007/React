export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hey ${user} you peice of crap screw you`)
    }
    const handleHover = () => {
        alert ("i'm so pissed of right now")
    }
    return(
        <>
        <WelcomeUser onclick={()=> HandleWelcomeUser("Tanishq")}
        onMouseEnter={handleHover} />
        </>
    )
}
const WelcomeUser = (props) => {
    return(
        <>
        <button onClick={props.onclick}>Click me</button>
        <button onMouseEnter={props.onMouseEnter}>Special Welcome</button>
        </>
    )
}