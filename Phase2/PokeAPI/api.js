const fetchPokemon = pokemonName => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(object => object.type.name)
      }
    })
}

module.exports = fetchPokemon
