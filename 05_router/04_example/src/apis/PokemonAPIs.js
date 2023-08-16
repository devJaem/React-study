import axios from 'axios';

const fetchPokemonData = async (pokemonId) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
};

const fetchSpeciesData = async (pokemonId) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    return response.data;
};

const fetchKoreanName = (speciesData) => {
    const koreanName = speciesData.names.find(name => name.language.name === 'ko');
    return koreanName ? koreanName.name : '';
};

const fetchAllPokemonData = async () => {
    const allPokemonData = [];
    for (let i = 1; i <= 151; i++) {
        const pokemonData = await fetchPokemonData(i);
        const speciesData = await fetchSpeciesData(i);
        const koreanName = fetchKoreanName(speciesData);
        allPokemonData.push({ ...pokemonData, korean_name: koreanName });
    }
return allPokemonData;
};

export default fetchAllPokemonData;