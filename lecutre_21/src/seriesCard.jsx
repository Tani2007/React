import styled from "styled-components"
export const SeriesCard = (props) => {
    console.log(props);
    const {name, rating, img_url, summary, genre} = props.data;
    // const btn_style={color:"red",backgroundColor:"yellow"}
    const ButtonTanishq = styled.button({color:"red",backgroundColor:"yellow"});
    return( <li>
        <div>
          <img src={img_url} width="40%"height="40%"/></div>
        <h2>Name: {name}
        </h2>
        <h3>Rating: {rating}</h3>
        <p className="text-3xl font-bold underline">Summary: {summary}</p>
        <p>Genre:  {genre}</p>  
        {/* <button style = {btn_style}>Watch now</button> */}
        <ButtonTanishq>Watch now</ButtonTanishq>
        </li>)
}
