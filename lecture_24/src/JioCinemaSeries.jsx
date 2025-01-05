import { SeriesCard } from "./seriesCard";
import seriesData from "./seriesData.json"



    const JioCinema = () => {
      return( 
        <ul>
          {
            seriesData.map((currElem) => {
              return(<SeriesCard key={currElem.id} data={currElem}/>)
            })
          }
        
        </ul>
      )
  }
//jab aap seriesCard wale componet ko call kar rahe the to aapne uske andar ek argument daal diya curr elem wala ab ye argument series wale card me jaakar parameter ban kar kaam karega

//aur yaha agar key prop(key={currElem.id}) ka use nhi kiya to error aa jata hai 
export default JioCinema;