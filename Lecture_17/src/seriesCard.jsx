export const SeriesCard = (props) => {
    console.log(props);
    const {name, rating, img_url, summary, genre} = props.data;
    const btn_style={color:"red",backgroundColor:"yellow"}
    return( <li>
        <div>
          <img src={img_url} width="40%"height="40%"/></div>
        <h2 style={{color:"brown"}}>Name: {name}
        </h2>
        <h3 style={{color:"green"}}>Rating: {rating}</h3>
        <p style={{color:"blue"}}>Summary: {summary}</p>
        <p style={btn_style}>Genre:  {genre}</p>  
        </li>)
}
