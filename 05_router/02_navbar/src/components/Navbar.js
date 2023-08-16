import { NavLink } from 'react-router-dom';

function NavBar(){
    const activeStyle = {
        backgroundColor: 'blue'
    }
    // return(
    //     <div>
    //         <ul>
    //             <li><a href={"/"}>Home</a></li>
    //             <li><a href={"/mypage"}>마이페이지</a></li>
    //             <li><a href={"/login"}>로그인</a></li>
    //         </ul>
    //     </div>
    // );

    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined }>Home</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined }>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined }>로그인</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar