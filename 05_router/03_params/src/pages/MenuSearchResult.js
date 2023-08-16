import boxStyle from './Menu.module.css'
import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import MenuItem from '../components/MenuItem';
import { searchMenu } from '../apis/MenuAPIs';

function MenuSearchResult() {

    // console.log(useSearchParams()[0].get('menuName'));
    const [searchParams] = useSearchParams();
    const searchMenuName = searchParams.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));
        },
        []
    );

    return(
        <>
            <h1>겸색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;