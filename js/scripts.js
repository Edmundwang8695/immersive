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
for (let i=0 ; i<pokemonList.length;i++){
  if(pokemonList[i].height>16){
      document.write( '<p>' + pokemonList[i].name + ' Height: ' + pokemonList[i].height + ' -Wow, this is big </p>')
  }
  else if(pokemonList[i].height<8){
      document.write('<p>'+ pokemonList[i].name + ' Height: ' + pokemonList[i].height + ' -This is a small pokemon</p>')
  }else{document.write('<p>' + pokemonList[i].name + ' Height: '+  pokemonList[i].height + ' -This is a average size pokemon</p>')}
}