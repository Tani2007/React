export const SeriesCard = (props) => {
    return( <li>
        <div>
          <img src={props.currElem.img_url} width="40%"height="40%"/></div>
        <h2>Name: {props.currElem.name}
        </h2>
        <h3>Rating: {props.currElem.rating}</h3>
        <p>Summary: {props.currElem.summary}</p>
        <p>Genre:  {props.currElem.genre}</p>  
        </li>)
}