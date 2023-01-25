const fetchPokemon = require('./api')

class Pokedex {
  constructor () {
    this.array = []
  }

  all () {
    return this.array.map(item => item.name)
  }

  async catch (pokemonName) {
    this.array.push(await fetchPokemon(pokemonName))
  }
}

module.exports = Pokedex
