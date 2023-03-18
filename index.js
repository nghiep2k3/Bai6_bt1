let pokemons = [];
let id = 0;

const pokemonname = document.querySelector(".right div")

const showindexs = pokemonname.querySelectorAll("div button")

const pokemonimg = document.querySelector(".left div .img")

const pokemontype = document.querySelector(".left div .type")

function getpokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      pokemons[id] = res.data;
      render()
    });
    
  
}

function render() {
    const pokemonnames = pokemons.map(function(pokemon){
        return `
        <div class="listAnimal">
            <button onclick="handleShow(${pokemon.id})">${pokemon.id}. ${pokemon.name}</button>
          </div>
        `
    })

    pokemonname.innerHTML = pokemonnames.join("")
    
}

function handleShow(id){
    let Showpokemonimg = 
        `
            <img
            class="listImg"
              src=${pokemons[id].sprites.front_default}
              alt=""
            />
        `
    pokemonimg.innerHTML = Showpokemonimg
    
    var Showpokemontype =[]
    
    for (let j = 0; j < pokemons[id].types.length; j++) {
        Showpokemontype[j] = [pokemons[id].types[j]].map((pokemon)=>{
            return `
                <div class="protypeAnimal">
                    <p>${pokemon.type.name}</p>
                </div>
            `;
        
    })
    pokemontype.innerHTML = Showpokemontype.join("")

}}

for (let id = 1; id <= 20; id++) {
    getpokemon(id);
}

