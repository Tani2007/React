import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  {/* creating component */}
  const JioCinema = () => {
    //that's how we insert JS variable in JSX.
    let name = "Crazy, Stupid,Love"//we will insert this variable in JSX code 

    let img = "https://i2.wp.com/lamascarada.com.mx/wp-content/uploads/2016/12/Crazy-Stupid-Love-poster.jpg"
    let summary = "A middle-aged man, after a divorce, learns to date again with help from a young bachelor, leading to unexpected romantic entanglements."
    let age = 16;




    let returnGenre = () => {
      let Genre = "Rom-Com"
      return Genre;
    }
    // step 1 
    
    // if (age < 18){
    //   return( 
    //     <>
    //     <div><img src={img} /></div>
    //     <h2>Name: {name}
    //     </h2>
    //     <h3>Rating: 7.1</h3>
    //     <p>{summary}</p>
    //     <p>Genre: {returnGenre()}</p>
    //     {/* now we will create a button and you can only click on it if you are >18. */}
    //     <button>Not Avilable</button>      
    //     </>
    //   )
    // }

  //   return( 
  //     <>
  //     <div><img src={img} /></div>
  //     <h2>Name: {name}
  //     </h2>
  //     <h3>Rating: 7.1</h3>
  //     <p>{summary}</p>
  //     <p>Genre: {returnGenre()}</p>
  //     {/* now we will create a button and you can only click on it if you are >18. */}
  //     <button>Watch now</button>      
  //     </>
  //   )
  // }

  // step-2

//   return( 
//     <>
//     <div><img src={img} /></div>
//     <h2>Name: {name}
//     </h2>
//     <h3>Rating: 7.1</h3>
//     <p>{summary}</p>
//     <p>Genre: {returnGenre()}</p>
//     {/* now we will create a button and you can only click on it if you are >18. */}
//     <button>{age >=18 ? "Watch Now" : "Not Available"}</button>      
//     </>
//   )
// }

  //step-3
//   let canWatch = "Not Available"
//   if(age >= 18) canWatch = "Watch Now"

//   return( 
//     <>
//     <div><img src={img} /></div>
//     <h2>Name: {name}
//     </h2>
//     <h3>Rating: 7.1</h3>
//     <p>{summary}</p>
//     <p>Genre: {returnGenre()}</p>
//     {/* now we will create a button and you can only click on it if you are >18. */}
//     <button>{canWatch}</button>      
//     </>
//   )
// }

//step-4 
//canWatch naam ka function bana do
const canWatch = () => {
  if(age > 18) return "Watch Now";
    return  "Not Available";
};
return( 
  <>
  <div><img src={img} /></div>
  <h2>Name: {name}
  </h2>
  <h3>Rating: 7.1</h3>
  <p>{summary}</p>
  <p>Genre: {returnGenre()}</p>
  {/* now we will create a button and you can only click on it if you are >18. */}
  <button>{canWatch()}</button>      
  </>
)
}



  return (
    <>
    {/* using components */}
      <JioCinema/>
      <JioCinema/>
      <JioCinema/>
    </>
  )
}

export default App
