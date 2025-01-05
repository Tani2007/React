import { useEffect, useState } from "react";

export function Api() {
  const [apiData, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Api Data</h1>
      <div>
        <ul>
          {apiData.map((currElem) => {
            return (
              <li key={currElem.id}>
                <img src={currElem.image} alt={apiData.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
