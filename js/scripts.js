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
  function addListItem(item){
    let pokemonlist = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = item.name;
    button.classList.add('button-class');
    button.addEventListener('click', function(){
      showDetails(item);
    })

    listItem.appendChild(button);
    pokemonlist.appendChild(listItem);


    }
    function showDetails(item){
      console.log(item);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})()

pokemonRepository.getAll().forEach(function (item) {
  pokemonRepository.addListItem(item);
  pokemonRepository.getAll();
});