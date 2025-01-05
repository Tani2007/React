export const SeriesCard = (props) => {
    console.log(props);
    const {name, rating, img_url, summary, genre} = props.data;
    return( <li>
        <div>
          <img src={img_url} width="40%"height="40%"/></div>
        <h2>Name: {name}
        </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {summary}</p>
        <p>Genre:  {genre}</p>  
        </li>)
}