import { useEffect,useState } from 'react';
import itemStyle from './PokemonItem.module.css'
import {Link} from 'react-router-dom';
import { pokemonImg } from '../apis/MenuAPIs';

function PokemonItem({pokemon}){
    const url= (pokemon.url).split("/")[6];
    const [images,setImages] = useState('')

    useEffect(
        ()=>{      
            const setImg =  async () =>{
                setImages( await pokemonImg(url));     
            }      
            setImg();
        },[]
    )
    return(
        <Link to={`/pokemon/${url}`}>
            <div className={itemStyle.PokemonItem}>
                <h3>이름 : {pokemon.name}</h3>
                <img src={images} style={{maxWidth: 300}}/>
            </div>
        </Link>
    )
}

export default PokemonItem;