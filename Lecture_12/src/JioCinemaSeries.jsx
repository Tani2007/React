import seriesData from "./api/seriesData.json"



    const JioCinema = () => {
      return( 
        <ul>
          {
            seriesData.map((currElem) => {
              return( <li key={currElem.id}>
              <div>
                <img src={currElem.img_url} width="40%"height="40%"/></div>
              <h2>Name: {currElem.name}
              </h2>
              <h3>Rating: {currElem.rating}</h3>
              <p>Summary: {currElem.summary}</p>
              <p>Genre:  {currElem.genre}</p>  
              </li>)
            })
          }
        
        </ul>
      )
  }

export default JioCinema;