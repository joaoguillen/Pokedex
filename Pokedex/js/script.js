const pokemonName = document.querySelector('.marquee');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('a.form');
const pesqui = document.querySelector('.pesqui');
const shiny = document.querySelector('.pokemon_shiny');
const input = document.querySelector('.input_search');




const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
   
    if (APIResponse.status == 200) {
        const data = await APIResponse.json(); 
        return data;
    }

    

    const data = await APIResponse.json(); 
    return data;
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'carregando';

    const data = await fetchPokemon(pokemon);


    
    if (data){
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        shiny.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
    } 
}   

pesqui.addEventListener('click', function(){
   
    renderPokemon(input.value.toLowerCase());
    input.value = '';

});


renderPokemon('1');