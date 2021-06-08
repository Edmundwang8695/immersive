let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.getElementById('modal-container');

  function getAll() {
    return pokemonList;
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon)
    } else {
      console.log('this is not a pokemon')
    }
  };
  function addListItem(pokemon){
    let pokemonlist = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add('.list-group-item','list-group-item-action');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn','btn-block');
    listItem.appendChild(button);
    pokemonlist.appendChild(listItem); 
    button.setAttribute('data-target','#pokemonModal','data-toggle','modal');
    button.addEventListener('click', function(){
      showDetails(pokemon);
    })
  }
  //fetch from api
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = [...details.types];
      }).catch(function (e) {
        console.error(e);
      });
    };
  function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        let modalBody = $('.modal-body');
        let modalHeader = $('.modal-header');
        let modalTitle = $('.modal-title');

        modalTitle.empty();
        modalBody.empty();

        let pokemonName = $('<h1>' + pokemon.name + '<h1>');
        let pokemonImage =$('<img class="modal-img" style="width:50%">');
        pokemonImage.attr('src',pokemon.imageUrl);
        let pokemonHeight =$('<p>' + 'Height： ' + pokemon.height + '<p>');
        let pokemonWeight =$('<p>' + 'Weight: ' + pokemon.weight +'<p>' );
        let pokemonTypes = document.createElement('ul');
        let types = 'Type: ';
        pokemon.types.forEach(function (item) {
        types += '<li>' + item.type.name + '</li>'
        });
        pokemonTypes.innerHTML = types;

        modalTitle.append(pokemonName);
        modalBody.append(pokemonImage);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonTypes);
        modalBody.append(pokemonWeight);

        $('#pokemonModal').modal('toggle')
      });
  };
  // function showModal(pokemon) {
  //   modalContainer.innerHTML = '';

  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');

  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close';
  //   closeButtonElement.addEventListener('click', hideModal);

  //   let titleElement = document.createElement('h1');
  //   titleElement.innerText = pokemon.name;

  //   let contentElement = document.createElement('p');
  //   contentElement.innerText = 'Height : ' + pokemon.height + ' Meters';

  //   let weightElement = document.createElement('p')
  //   weightElement.innerText = 'Weight : ' + pokemon.weight + ' kg';

  //   let imageElement = document.createElement('img');
  //   imageElement.setAttribute('src', pokemon.imageUrl);
  //   imageElement.src = pokemon.imageUrl;

  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modal.appendChild(imageElement);
  //   modal.appendChild(weightElement);
  //   modalContainer.appendChild(modal);
  //   modalContainer.classList.add('is-visible');
  // };

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // };

  
  
  // // document.querySelector('#show-modal').addEventListener('click', () => {
  // //  showModal();
  // //  });

  // window.addEventListener('keydown',(e) => {
  //   if (e.key === 'escape' && modalContainer.classList.contains('is-visible')){
  //     hideModal();
  //   }
  // });
  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });
  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    addListItem: addListItem,
    loadDetails:loadDetails,
    showDetails: showDetails,
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});