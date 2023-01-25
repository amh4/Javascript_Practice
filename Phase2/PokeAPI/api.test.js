const fetchPokemon = require('./api')
const Pokedex = require('./pokedex')

describe('fetchPokemon', () => {
  it('returns the details of a specified pokemon', async () => {
    const result = await fetchPokemon('charizard')
    expect(result.id).toEqual(6)
    expect(result.name).toEqual('charizard')
  })

  it('calls all and returns an emtpy array', () => {
    const pokedex = new Pokedex()
    expect(pokedex.all()).toEqual([])
  })

  it('catches the pokemon and adds it to the array', async () => {
    const pokedex = new Pokedex()
    await pokedex.catch('pikachu')
    expect(pokedex.all()).toEqual(['pikachu'])
  })
})
