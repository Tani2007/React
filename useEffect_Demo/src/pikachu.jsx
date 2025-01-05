import { useEffect, useState } from "react";

export function Pikachu() {
  const [pokeCharacter, setPokeCharacter] = useState(null);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState("");
  const pikachuApi = "https://pokeapi.co/api/v2/pokemon/charmander";
  useEffect(() => {
    fetch(pikachuApi)
      .then((res) => res.json())
      .then((data) => {
        setPokeCharacter(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loding) {
    return <h1>Loding...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div>
      <h1>Lets catch Pikachu</h1>
      <p>
        <ul>
          <li key={pokeCharacter.id}>{pokeCharacter.name}</li>
          <img
            src={pokeCharacter.sprites.other.dream_world.front_default}
            alt=""
          />
        </ul>
      </p>
    </div>
  );
}
