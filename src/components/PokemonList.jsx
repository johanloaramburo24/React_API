import PokemonCard from "./PokemonCard.jsx";

function PokemonList({ pokemons }) {
  return (
    <div className="grid">
      {pokemons.map((pokemon,) => (
        <PokemonCard 
          key={pokemon.name} 
          pokemon={pokemon}  
        />
      ))}
    </div>
  );
}

export default PokemonList;