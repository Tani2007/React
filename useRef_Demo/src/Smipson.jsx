import { useEffect, useState } from "react";

export function Simpons() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  let URL = "https://api.sampleapis.com/movies/animation";
  function apiCall() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    apiCall();
  }, []);
  const searchData = data.filter((curData) =>
    curData.title.toLowerCase().includes(inputData.toLowerCase())
  );
  if (data) {
    return (
      <div>
        <h1>Movies Collection</h1>
        <input
          type="text"
          placeholder="Search a Movie Here"
          onChange={(e) => setInputData(e.target.value)}
        />
        <ul>
          <div className="container">
            {searchData.map((currElem) => {
              return (
                <div className="mainList">
                  <li key={currElem.id}>
                    <div className="moviesSection">
                      <h1>{currElem.title}</h1>
                      <img src={currElem.posterURL} alt="" />
                    </div>
                  </li>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}
