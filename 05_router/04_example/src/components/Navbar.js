import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'purple',
        color: 'white'
    }
    return (
        <div>
            <ul>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle:undefined}>HOME</NavLink></li>
                <li><NavLink to="/pokemonlib" style={({isActive}) => isActive? activeStyle:undefined}>포켓몬도감</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;