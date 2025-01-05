//Node module Folder contains all the necessary library and dependencies

//Public Folder contains all the static files like images, videos , fonts  ,etc.

//src Folder constains the actual component of react eg App.jsx index.css index.html, main.jsx , etc.

//eslint.cjs = this file controls the error setion of the js code.

//gitignore = iske andar jo bhi file ya flder ka naam hoga wo github par upload nhi hoga.

//package.json = ye file aapka react version ko contron karti hai saari dependencies aur dev dependencies ko control karti hai 

//react vo hai jispar ham abhi kaam kar rahe hai par agar DOM ko update karna hai vo react DOM ka kaam hai aur yadi mobile application me UI ka kaam react Native karega.

//React + React-DOM = Web Site 
//React +React-Native = Mobile Application


//Jsx ek aisi cheez hai jisse aap html ko JS ke andar likh sakte ho without create element and append child

//aur is html(jsx) ke code ko compile karne ka kaam bable karta hai ye bable ki file aapko node module ke folder me milti hai saara compile aur transpile karne ka kaam yahi karti hai.

//compile means ek likhe hue code ko machine language me convert karna.

//to see JSX go to lecture_05 app.jsx there you will get to know baout it 

//babel compile karne ka kaam karta hai wo aapke jsx ke h1 tag ko react.createElements("h1",props,clicldren) me convert kardeta hia jisse ki browser samajh sake aapka code.

//jsx me ya to aap apne saare tag ek parent div ke andar create karo ya phir uske kuch is tarah enclose kar do <> .... </>.
//agar aap bina enclose kare alag alag tags banate jayoge to error aa jayega.

//aap jsx me return ke baad ye wale brackets{} nhi use kar sakte varna error aa jayega aapko hamesha ye wale brackets use karne padenge().

//ab agar aapko jsx me koi bhi image inset karni hai to pehle us image ki file aapko public folder me upload karni padegi


//Lecture_06
//There are two type of components in jsx 
/*
1- class based components 
2- functional components (mostly used)

compoonents ka use ham log vaha karte hai jaya hame ek single peice of code ko 2 ya 2 se jyada jagah par use karna hota hia (this is just like function in javascript)

component name always starts with capital letter

ab mai ise baar baar use karsakta hu aaraam se.
*/

//lecture_07
//React Fragments 
/*
ab ham log react me single parent element ke bina kuch nhi likh sakte jaise ek arent div ke andar baaki saare div banana aap bina parent ke baaki saare div nhi bana sakte to ise cheez ko hatane ke liye fragments ka concept aaya.

job ki yeh tha ;
<>
...these are your fragemnt
</>
*/

//lecture_08
/*
now we are gonna use JavaScript in jsx 
the process is totaly simple;
koi java script variable ya function ke outcome ko curly brackets me use kiya jaat hai.
*/

//Lecture_09
/*
in this lecture we will see how to use conditional operator in jsx

conditional operator = if else if else  

now we will create a button and you can only click on it if you are >18.

step 1 = hame age naam ka variable liya aur usko 16 par rakh diya aur loop chala diya if(age < 18) {
    return(
        <>
        <h1>...</h1>
        <button>Not Avialable</button>
        </>
    )
}
    return(
        <>
        <h1>..</h1>
        <button>Watch now</button>
        </>
    )
*/
//Lecture_10 
/*
jsx kabhi NAN undefined show hi nhi karega woh  
*/

//Lecture_11
/*
IMPORT AND EXPORT

in this lecture we have created a new forder "COMPONENTS" in "src" folder and now we will use the concept of import and export  

In this components folder we will create a file "NetflixSeries.jsx" 

we will only create a function in it which will be having a h1 tag and some text.

we will export this function using default and import it on App.jsx

Note-in an file you can make only one default component

Remember:do not use curly brackets inn import it will give you an error 

do it like this-
import  NetflixSeries  from "./components/NetflixSeries";


but ther is an another way to do this import and export thing 

function banate hi export likh do uske side me aur phir usko import karte time in brackets ke andar rakh do {}.

example 
export const App = () => {
    retun(
        <>
            <h1>..<h1/>
            <h1>..<h1/>
            <h1>..<h1/>
        </>
    )
    }

    but now you will have to use import in this way 
    import { NetflixSeries }  from "./components/NetflixSeries".

    if you do not this {} jsx will not get data from you component file.

    and now you do not have to export default at the end of your file.

    when you have mltiple header footer or any other components you just need to write export at the time of making the funtion and while importing you just need to wwrite a comma after NetflixSeries and it will import it import it also and now you can use it anywhere 
    example-
    export const Footer = () => {
        return <p>copyright @Tanishqsaxena</p>
    }
    import  { NetflixSeries,Footer } from "./components/NetflixSeries"; 



    Last way to use import and export 
    
    if you have creater a Footer component with combined export and a NetflixSeries with default export at the time of import you will have to do this 

    import NetflixSeries,{ Footer } from "./components/NetflixSeries"; 
*/

//Lecture-12
/*
Looping in jsx but here we don't have for loop

Now we will create a seperate json file in a folder "api" and file name is "seriesData.json"

in this json file we will create an array of objects like this,
[
    {
        name:"..",
        img:"..",
        rating:"..",
        genre:".."
    },
    {
        name:"..",
        img:"..",
        rating:"..",
        genre:".."
    }
]

now we make 3 cards in which we will get this data to do so,

      <img src={seriesData[0].>
      <h2>Name: {seriesData[0].name}
      </h2>
      <h3>Rating: {seriesData[0].rating}</h3>
      <p>Summary: {seriesData[0].summary}</p>
      <p>Genre:  {seriesData[0].genre}</p>

      In this way we will get the data from api  

      Note-To use this api data you will have to import the file first in your working file(in our case App.jsx)
------------------------------------------------
      but we are only changing the index of data in all 3 card so why don't we just start a loop and increment it till the number of movie data we have.

      for this loooping prpoces we will have t use map method and then we will write like this,
      {currElem.img_url,currElem.name...}in this way and if you are using a list inside a map method then you need to paas a key inside it or else it eill give an error.
*/

//Lecutre_13
/*
in this lecture we will learn the concept of props 

we will make 3 extra files 1-JioCinemaSeries.jsx
2-Seriescard.jsx
3-seriesData.jsx

3rd file will contain the api data(name o moive, img....)
2nd file willl use this api to and make the card component while making card we will pass the props inside it  
3rd will use the map function and reurn a prop(currelem)

props are like id class key ... we can create our own prop.

jab aap seriesCard wale componet ko call kar rahe the to aapne uske andar ek argument daal diya curr elem wala ab ye argument series wale card me jaakar parameter ban kar kaam karega

props kuch nhi hai yeh ek argument hai jo ek baar calling ke time par jayea aur ek baar making ke time par jayega

calling ke time par kuch aise 
<seriesCard currElem={currElem}/>

ab kehne ko yeh currElem ek prop hai par conceptually yeh ek ardument hai 


aur making ke time par kuch aise use karna hai ab kam us currelem wale prop ko ksi bhi naam se get kar sakte hai to ham use prop ke naam se get kar lete hai aur use kuch is tarah se use karte hai  
const SeriesCard = (props) => {
        <h2>Name: {props.currElem.name}
        </h2>
    }

*/
//Lecture_14
/*
    now we will learn the concept of destructuring of array and object 

    to destructure use this
    const {data} = props;
    ab yaha par data ek  key ban jayega jo ki props ka kaam karega aisa samjho aap ne props ko data se exchange kar diya ab aapko har jagah props.data.name likhne ki jarurat nhi hai

    before=<h2>Name: {props.data.name}</h2>
    after=<h2>Name: {data.name}</h2>

    but we will do adavnce desructuring now
    this is advance destructuring =
    const {id, name, rating, img_url, summary, genre} = props.data;
    now no need to write {data.name} only write {name}


*/
//Lecture_16
/*
    now we will learn how to pass jsx in props 

    we will create a component name "Profile" and inside it we will pass a component "ProfileCard" with some prop
*/
//Lecture_17
/*
    now we will learn css in react 

    to style the page we write the css code in index.css 
    
    
    to style the page in we wite our code in seperate file and linnk it to the page.for exampe for styling the page we write the page our code in App.css and link it to App.jsx.

    ab yaha index wali file me jo jo styling deni hai wo dedo aur wo pure page par apply 

    aur jo styling dega app.css wali file me dega wo app wali file me apply ho jayegi.


*/
//Lecture_18 in Lecture_17
/*
    Now we will learn how to apply inline css in jsx.

     <h2 style={{color:"brown"}}>Name: {name}</h2>

     in this way we do the inline styling of our jsx file.

     but sometime inline styling css looks very ugly so to make ti look good we create an object in jsx thet contain css style and we give that object name in the inline style and then it looks good.

     for example = 
    const btn_style={color:"red",backgroundColor:"yellow"}

    and now pass this as the inline of the genere

    <p style={btn_style}>Genre:  {genre}</p> 


*/
//Lecture_19
/*
    in this lecture we will learn how to give consitional styling using react 

    conditional styling means if your movie rating is greter than 8 its colour is red if its between 6 to 8 than its colour its green else it colour is blue.

    maan lo ki maine css file me ek class "superhit" naam ki class ko styling di ki background-color : red;

    aur isi tarah "average" naamki class ko styling di ki background-color: yellow;

    ab ham hamare rating me kuch change karenge 
    pehle kuch aisa tha,
    <h3>Rating : {rating}</h3>
    ab ham isme span tag aur add kar denge
    <h3>Rating : <span className ={rating>=8 ? "superhit" : "average" } > {rating}</span></h3>

*/
//lecutre_20
/*
css module in react.js 

agar kisi file ko css module banana hai to uske naam ke aaage .module.css laga do  (filename.module.css)

aur ye module css class name to unique bana degi  

ab apni jioCinema.css file ko jioCinema.module.css me convert kar do maan le ki tere paar ek jioCinema.css naam ki file thi aur tune use jioCinema.module.css me badal diya hai.

ab saaara code jiocinema.css wali file se module wali file me paste kar do 

ab is module wali file ko SiresCard.jsx wali file me import kar do like this ,

import styles from "./JioCinema.module.css";

ab yaha ham class aise nhi de sakte 
ki className = "card" 

ab hame likhna padega 
ki className = {styles.card}

agar aapki koi class is tarah ki hai "card-content" to aap use is tarah nhi pass kar sakte className = {styels.card-content} this gives you an error

iska sahi tareeka hai className = {styles["card-content"]}

par kya aapko pata hai hamne module kyu use kya 
ye saare class name ko unique bana dega means ab aap inpect karoge tab aapko har unique class name ke aage ek extra cheez add hoti hue dikhegi jai se card_fs01013 kuch iasa jabki asli class name card tha ye isliye kiya hai ki kabhi aap agar doosri file me yahi styling daalo to koi conflict na ho 
*/

//lecutre_21
/*
styed comoponts 
to install styled components use this command 

npm i styled-components
bun i styled-components
style component name must starts with capital.
syntax
const Button = styled.tagname`
color:grey;
`;
here tagname can be h1 li a ,etc.

another syntax = 
cont Button = styled.tagname({
color:grey,
})

to use it first you have to import it 
import styed from "styled-components";

to do this ye jo aapne btn style ka object banaya tha 
const btn_style={color:"red",backgroundColor:"yellow"}
isko change karna padega kuch aise 
const ButtonTanishq = styled.button({color:"red",backgroundColor:"yellow"});

ab ye ButtonTanishq ek tag ban gya hai jo ki pehle se hi styling lekar baitha hai 

now to use it just do this 
<ButtonTanishq>Watch now</ButtonTanishq>
*/
//lecutre_22

/*
 let me do this in lecture_21 
 to use tailwind go to the section of install tailwid using vite follow the steps and install it 

 now ,
 <p className="text-3xl font-bold underline">Summary: {summary}</p>
 give class name like this and it will be added to your file. 

*/

//lecture_23
/*

now we will see event handling 

to do so 
1 = use camelCase
2 = add a prefix on with every event like this  "onClick onMouseEnter onSubmit"
3 = during form subbmission use handle keyword like this "handleFormSubmit"



method 1 

create a new file eventHandling.jsx

export const EventHandling = () => {
    const handleButtonClick = (event) => {
        console.log(event)
        console.log(event.target) //ye aako button batega
        console.log(event.type)//ye batega event type tha is click
        alert("hey you basterd you clicked it ")
    }

    return(
        <>
            <button onClick={handleButtonClick}>click me</button>
        </>
    )
}

now import this on app.jsx and use use it  

par yaha jo hame console.log(event) kiya hai ye aapho batega ki ye SyntheticBaseEvent hai 


Method 2  = using fat arrow funtion
<button onClick={(event) => handleButtonClick(event)}>click me2</button>

remaining things will same like handleButtonClick function

Method 3 = inline event handlers
<button onClick={(event) => console.log(event) }>inline Event</button>

Method =4 =inline arr function

<button onClick={() => alert("hey i'm inline event")}>inline arr  function</button>

but if you want to use argumtent in this events you need to use only method = 2 

    const handleUser = (user) => {
        console.log(`hey ${user}  how you doing`)
    }

<button onClick={()=> handleUser("tanishq")}>user btn</button>
*/
//lecture_24 
/*
here we will see that how to pass event handler as props in react js 

so to pass event as props we need to do this 

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


yaha pata hai hamne kya kiya hai pehle to hamne pehle return me welcome user naam ka ek tag banaya jisme do function pass kiye pehla onclick dusra mouse enter aur in funciton ke naam (onbtnclick ya on hovermouse enter bhi ho sakte hai) aisa isliye kyuki abhi  yeh sirf ek normal function hai yeh koi event nhi hai 

phir in functions ko return ke upar define kar do .

ab aata hai main kaam ab ek nya component banado yaani doosra return satatement aur is return statement me aap 2 button create karo 

aur yeh jo return statement ek naye function welcome user ke andar aegi aur ye argument legi props

aur ab button ke andar onClick ki spelling bhi sahi rakhna kyu ki wahi ise click karwaega aur uske andar props.onclick ye paas kardena matlab props ka jo bhi function pass karwana hai wo (props.jofunciton bhi karwana hai) 
like this,
<button onClick={props.onclick}>Click me</button>
        <button onMouseEnter={props.onMouseEnter}>Special Welcome</button>

*/
//lecutre_25
/*
iske liye alag se file nhi banate isse lecture_24 me ki ek event propogation walifile banakar dekh lete hai.

event rpopogation ka concept yehh kehta hai ki agar aap ke paas 3 div hai to agar aap sabse andar wale ko bhi click karto ho to bhi aapke baahar wale run karnge.

agar aao ise rokna chahte ho ki aisa na ho jise click kara hai wahi chale to stopPropogation ka use kar lo

isi cheez ko ham bubbling phase kehte hai and se bahar jaana sabse andar wale div se bahar wale div me jaana.

to use Capturing phase  matlab bahar se andar uske liye jyada kuch nhi sirf onClick ki jagah onClickCapture likhna padta hai 
*/
//lecture_26
/*
jab bhi state ki value change hoti hai tab aapka jo component re render hota hai 


matlab -->
export const State = () => {
    let value = 0;
    let handleclick = () => {
        value++;
        console.log(value)
    }
    return(
        <>
        <h1>{value}</h1>
        <h1><button onClick={() => handleclick()}>Increment</button></h1>
        </>
    )
}

ab aapko bhi pata hia is code ke kaaran jab bhi aap is btn par click karoge to value vale variable ki value 1 se increment ho jayegi aur console.log me show ho jaye ga
par ye value aapko screen par update hoti hue nhi dikhegi 

toh aga aapko yeh value screen par bhi show karani hai to aapko state ka use karna padega

syntax of useState --> 
const[count,setCount] = useState(0)

here count = State Variable(the current state value)
         
here setCount = A function that updates the state variable 
 
useState(0) = here 0 is the inetial value of count.


example -->
import { useState } from "react";

export const State = () => {
    const[count,setCount] = useState(0);
    let handleclick = () => {
        setCount(() => count + 1)
    }
    return(
        <>
        <h1>{count}</h1>
        <h1><button onClick={() => handleclick()}>Increment</button></h1>
        </>
    )
}
*/ 
//lecture_27 in lecture_26
/*
in react state is a way to store and manage data over the lifetime of a component.when the state changes react re-render the component to reflet the new state.

to see this go to lecture_26 State.jsx file

to hamne ek child component ke naam ka component banaya jo ki ek div ke andar h1 ko contain karega. aur ek cheez console.log()karaega

to aapko wo console.log() inetially 2 baar chala deta hai .
to is 2 baar ko agar hatana hai to strict mode off kar do.

par aapne <ChildComponent par to koi function nhi laga rakha hai to yeh baar baar kyu chal raha hai iska reason hai ki jab jab parent component ka state change hoga tab apke parent ke andar jo kuch bhi hai wo re run karega.

main cheez yeh hai ki parent component ki state me agar koi bhi change aata hai to child bhi dobata render honge.
*/
//lecture_28
/*
logo ka ek commmon doubt aata hai ki jab bhi onClick par state re render hotai hai to count ki inetial value 0 hai wo 1 se increment ho jani chahiye aur har baar 1 aana chahiye. 
par aisa nhi hota count ki ek baar click karne par value 1 hojati hai aur phir har click par badhti rehti hai 
*/
//lecture_29
/*
here we got a challenge we have to show the data of the object  1st by using map method or loop and 2 - by using hooks 

1--by using map method
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

2--by using state variable
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
*/
//lecture_30
/*
we will Learn Derived State here

state vriable ki madad se ek doosre variable me data store karwana 

jaise
 const[user,setUser] = useState([
        {name:"Alice",age :25},
        {name:"Bob",age :30},
        {name:"Jhon",age :35},
        {name:"Charlie",age :45},
    ])
    console.log(user)//user ko ek array containeing variable hai 
    const userCount = user.length
    

    useke baad toh hamne reduce ki madad se average age nikal wa diya hai aur use show kar diya hai 
*/
//lecture_31 in lecture_30
/*
 lift state up - maan lo aapne ek state child component me banayi aur baad me pata chalta hai ki vahi same state ek  doosre child component ko chahiye to vaha ham iska use karte hai 

 maan lo aapka ek App component hai aur uske andar 2 aur components hai pehla imputComponent aur doosra displayComponent ab aapne inputComponent ke andar ek state variable banaya usestate ki madad se aur aap usko displayComponent me use karna chahte ho to iska use karna.

 isko karne ka tareeka hai ki inputComponent ka state varaible App me lift kar do aur phir displayComponent use props ke madhayam se get kar lega.

to see its practical there is a file in lecture_30 LiftingStateUp.jsx

kuch istarah
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
    is neeche wale useState ko yaha create mat karo isko app me jaakar create karo
    
    const [inputValue,setInputValue] = useState("");
    return(
        <>
        <input type="text" placeholder="enter anything" value={props.inputValue} onChange={(e)=> props.setInputValue(e.target.value)}/>
        </>
    )
}
const DisplayComponent = (props) => {
    return <p>your current input value is: {props.name}</p>
}
*/
//lecture_32
/*
this is a challenge to make a toggle button
*/
//lecture_33
/*
to use icons in react we use react icons go to official react icon site there you will find a code to add react icon that is = 
npm install react-icons 
or if you are using bun write
bun install react-icons

now to use these react in lecture_32 write the heading Toggle Switch
now to use icons 
import { IoIosSwitch } from "react-icons/io";

now to use it,
<IoIosSwitch />
*/
//lecture_34 and lecture_35
/*
todo App
we are gonna make todo app now,

first we have created the basic structure ki div add button and form containing input 
now we have created a inputValue variable that is a empty string right now and it is static you can not change but to make it dynamic yo uneed to write onChage attribute after value like this,
                    value={inputValue} 
                    onChange={(event) => handleInputChange(event.target.value)}
aur iske baad handleInputValue function bana do 

ab aak jab jab form submit karke wo page ko refresh karta hai to prevent this use this,
const handleFromSubmit = (event) => {
        event.preventDefault();
    }
<form onSubmit={handleFromSubmit}>

ab baar baar add wale button par click karke ye form submit nhi hoga

par ab aakpo input ka data store bhi to karwana hai useke liye ek aur state lagega
*/
//lecture_36 (adding date and ime in todo list)
/*
to add date and time we have just used the Js concept to add date and time we have first created the set interval function inside that function we have created the new Date() element that gives us the current date and then we used to local date and time string functions and use the function setTime of useState to update this date and time on page and set this interval at 1 sec like this

const[dateTime, setTime] = useState("")
  setInterval(() => {
        let date = new Date()
        let localTimeString = date.toLocaleTimeString();
        let localDateString = date.toLocaleDateString();
        setTime(`${localDateString} - ${localTimeString}`)
     }, 1000);

<h2 className="date-time">{dateTime}</h2>
*/
//lecture_37
/*
yaha hamne delete button ko work kara ya hai

pehle humne delete button ko onClick par ek function dediya handleDeleteTodo phir use baad me define kar diya 
 like this 

 <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}
<button/>
 const handleDeleteTodo = (value) => {
        console.log(value)
        const updatedTask = task.filter((currElem) => currElem !== value)
        setTask(updatedTask)
    }
*/

//lecture_38
/*
here we will see how to write a good code in react we form section from Todo.jsx and we ade a seperate component for it we made a seperate component for date and time too and we changed the whole inputValue variable to an object and for further detail you have to watch the full todo videos again since one time watch is not sufficient for this todo app.
*/
//lecutre_39 and lecture_40
/*
here we saw how to update data in local storage and get data from local storage to update data in local storage we have to use the function localStorage.setItem(JSon.stringify(obj))
to fetch it from local storage we have to use localSorage.getItems(JSON.parse)

and in lecture 40 we saw how to upload your react app to netlify
*/
//lecture_41
/*
in this lecture we have learned about how to host react js apps for this you jast have to make a dist forder by using a command and then host this folder on a website.
*/
//lecture_42
/*
here we wil see why keys are so important.
keys dena bahut zazoori hota hai react js me when you are using map method.
and it should be unique so that it won't create any error.
*/

//lecture_43 
/*
short circuit evaluaton 
Logial OR(||)
syntax:expression1||expression2
Rule:if expression1 is true,return expression1,else return expression expression2


const result = false||"hello";//hello 

const result2 = true||"hello"//true

Logical AND(&&)
syntax:expression1&&expression2;
Rule: if exprerssion 1 is false return expression1,else return expression2;
const result = false||"hello";//false 

const result2 = true||"hello"//hello

Nullish (??)
syntax:expression1 ?? expression2;
rule :if expression1 is not null or undefined,return expression1,else return expression2

const result = null ?? "hello" : //hello

const result2 = undefined ?? "hello";//hello

const result3 = "fine" ?? "hello"//fine

to see the prctical go to the file of this lecture.
*/
//lecture_45
/*
here we will tallk about hooks
 
*/
