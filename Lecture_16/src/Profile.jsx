
export function Profile() {
    return (
        <div>
        <h1>Profile Card Challenge</h1>
        <ProfleCard 
            name = "Eric"
            age = "8"
            greeting= {
                <div>
                    <strong>Hi Eric, you Fat-Ass</strong>
                    </div>
                }
            >
            <p>Hobbies; Badminton</p>
            <button>Contact</button>
            </ ProfleCard>


            <ProfleCard 
            name = "Kenny"
            age = "8"
            greeting= {
                <div><strong>Hi Kenny, you Basterd</strong></div>
            }
            >
            <p>Hobbies; Tabla</p>
            <button>Contact</button>
            </ ProfleCard>

            <ProfilePractice>
                <h1>hey haven't you done it yet</h1>
                <h1>you should go fast or else you wont be able to survive in this competetive world</h1>
            </ProfilePractice>
        </div>
        

    )
}
function ProfleCard(props){
    return(
        <>
        <h1>Name:{props.name}</h1>
        <h2>Age:{props.age}</h2>
        <h2>Greeting:{props.greeting}</h2>
        <h2>{props.children}</h2>
        
        </>
    )
}
function ProfilePractice(detail){
    return(
        <>
        <h6>{detail.children}</h6>
        </>
    )
}