import { useEffect,useState} from "react";
import PokemonItem from "../components/PokemonItem";
import boxStyle from './Menu.module.css';
import { useNavigate } from "react-router-dom";
import {pokemonList} from '../apis/MenuAPIs'
function Menu(){
    const [searchValue,setSearchValue] = useState('');
    const navigate = useNavigate();
    const [results,setResults] = useState([])
    const [list,setList] = useState('0');
    useEffect(
        ()=>{            
            async function syncFetches() {
                setResults(await pokemonList(list));
            }
            syncFetches();            
        }
        ,[list]
    )
    const onClickHandler = () =>{
        navigate(`/pokemon/search?pokemonName=${searchValue}`)
    }
    const nextList = () =>{
        setList(parseInt(list)+20);
    }
    const prevList = () =>{
        setList(parseInt(list)-20);
    }

    return(
        <>
            <h1>포켓몬 목록</h1>
            <div>
                <input type="search" name="menuName" onChange={ e => setSearchValue(e.target.value)}/>
                <button onClick={ onClickHandler}>검색</button>
                <button onClick={ nextList}>다음</button>
                <button onClick={ prevList}>이전</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {results.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon}/>)}
            </div>
        </>
    )
}
export default Menu;