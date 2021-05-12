let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'balbasure', height: 7, type: ['grass', 'poision'] },

    { name: 'charizard', height: 20, type: ['fire', 'dragon'] },

    { name: 'butterfree', height: 15, type: ['bug', 'flying'] },
  ]
  function getAll() {
    return pokemonList
  }
  function add(item) {
    if (typeof pokemon === 'object') {
      pokemonList.push(item)
    } else {
      console.log('this is not a pokemon')
    }
  }

  return {
    getAll: getAll,
    add: add,
  }
})()

pokemonRepository.getAll().forEach(function (item) {
  console.log(item.name + " has a Height of " + item.height + " Type: "+ item.type)})