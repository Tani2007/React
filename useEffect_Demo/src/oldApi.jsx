import { useEffect, useState } from "react";

export function OldApi() {
  const [pokeCharacter, setPokeCharacter] = useState(null);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState("");
  const pikachuApi = "https://pokeapi.co/api/v2/pokemon/charmander";
  const fetchPoke = async () => {
    try {
      const res = await fetch(pikachuApi);
      const data = await res.json();
      setPokeCharacter(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPoke();
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
