import { useState ,useEffect} from 'react';
import boxStyle from './Menu.module.css'
import { useSearchParams } from 'react-router-dom';
import PokemonItem from '../components/PokemonItem';
import { searchMenu } from '../apis/MenuAPIs';
function MenuSearchResult(){
    const [searchParams] = useSearchParams();
    const searchMenuName = searchParams.get('pokemonName');
    const [pokemonList,setPokemonList] = useState([]);

    useEffect(
        ()=>{

            async function syncFetches() {
                setPokemonList(await searchMenu(searchMenuName));
            }

            syncFetches();
        },
        []
    )
    return(
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {pokemonList.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;