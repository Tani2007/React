import { useEffect, useState } from "react";

export function NewApi() {
  const [apiData, setData] = useState(null);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(apiData);
  if (apiData) {
    return (
      <div>
        <h1>Api Data</h1>
        <div>
          <ul>
            <li key={apiData.id}>Joke Type - {apiData.type}</li>
            <li>Setup - {apiData.setup}</li>
            <li>Punchline - {apiData.punchline}</li>
          </ul>
        </div>
      </div>
    );
  }
}
