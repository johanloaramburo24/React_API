 function PokemonCard({ pokemon }) {

  const id = pokemon.url.split("/")[6];

  return (
    <div className="card">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.padStart(3, '0')}.png`}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;