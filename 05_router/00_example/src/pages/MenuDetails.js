import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {pokemonImg} from '../apis/MenuAPIs'
import {pokemonName} from '../apis/MenuAPIs'

function MenuDetails () {

    const {params} = useParams();
    const [name,setName] = useState('')
    const [images,setImages] = useState('')

    useEffect(
        () => {      
            async function syncFetches() {
                setName(await pokemonName(params));
                setImages(await pokemonImg(params));
            }

            syncFetches();   
        },
        []
    );

    return (
        <>
            <h2>포켓몬 상세 설명</h2>
            <h3>포켓몬 이름 : {name} </h3>
            <img src={images} style={{maxWidth: 500}}/>
        </>
    );
}

export default MenuDetails;