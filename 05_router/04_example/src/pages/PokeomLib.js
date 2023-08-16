import fetchAllPokemonData from "../apis/PokemonAPIs";


function PokeomLib() {

    const pokemonList = fetchAllPokemonData();
    
    return(
        <>
        <h1>리스트 보기</h1>
        <div>
        <input/>
        <button>검색</button>
        </div>
        <div>
        
        </div>
        </>
    );
}

export default PokeomLib;