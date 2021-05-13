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
  if(item.height<8){
    document.write('<p>' + item.name + 'height ' + item.height + ' This is a small pokemon </p>')
  }else if( item.height>16){
    document.write('<p>' + item.name + ' height ' + item.height + ' Wow, this is a big pokemon </p>')
  }else(
    document.write( '<p>' + item.name + ' height ' + item.height + ' This is a average size pokemin </p>')
  )})