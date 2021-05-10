let pokemonRespository = (function(){ 
  let pokemonList=[
    {name:'balbasure',
      height:7,
      type:['grass','poision']},
  
    {name:'charizard',
      height:20,
      type:['fire','dragon']},
  
    {name:'butterfree',
      height:15,
      type:['bug','flying']}
  ]
  
  pokemonList.forEach(function(pokemonList){
    if(pokemonList.height>16){
        document.write( '<p>' + pokemonList.name + ' Height: ' + pokemonList.height + ' -Wow, this is big </p>')
    }
    else if(pokemonList.height<8){
        document.write('<p>'+ pokemonList.name + ' Height: ' + pokemonList.height + ' -This is a small pokemon</p>')
    }else{document.write('<p>' + pokemonList.name + ' Height: '+  pokemonList.height + ' -This is a average size pokemon</p>')}
  });
  
  return {
  getAll: function(){
      return pokemonList;
    },
  add: function(item){
      if (typeof pokemon === 'object'){
      pokemonList.push(item)
    }else {
    console.log('this is not a pokemon')
    };
    }
    }
  })()
  
  console.log(pokemonRespository.getAll())
  