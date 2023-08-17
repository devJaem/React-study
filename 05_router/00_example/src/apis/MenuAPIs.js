export function pokemonList(list){                    
    return new Promise((resolve,reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${list}&limit=20"`)
            .then(res=> res.json())
            .then(json => {
                console.log(json);
                resolve(json.results);
            })
    })  
}

export function pokemonImg(url){                    
    return new Promise((resolve,reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
            .then(res=> res.json())
            .then(json => {
                resolve(json.sprites.front_default);
            })
    })  
}
export function pokemonName(url){                    
    return new Promise((resolve,reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
            .then(res=> res.json())
            .then(json => {
                resolve(json.name);
            })
    })  
}

export function searchMenu(searchPokemonName){
    return new Promise((resolve,reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(res=> res.json())
        .then(json => {
            resolve((json.results).filter(pokemon => pokemon.name.match(searchPokemonName)));

        })
    })
}