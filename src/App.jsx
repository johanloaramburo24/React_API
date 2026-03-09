import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList.jsx";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        console.log(data); // 👈 IMPORTANTE
        setPokemons(data.results);
      } catch (error) {
        console.error("Error al consumir la API", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Pokémon</h1>
      <p className="p">Total de cartas: 20</p>
      {loading ? <p>Cargando...</p> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
