let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'balbasure', height: 7, type: ['grass', 'poision'] },

    { name: 'charizard', height: 20, type: ['fire', 'dragon'] },

    { name: 'butterfree', height: 15, type: ['bug', 'flying'] },
  ]
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
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

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});