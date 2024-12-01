// 네비게이션바 컴포넌트
import {NavLink} from 'react-router-dom';

function Navbar(){

    const activeStyle={
        backgroundColor : 'green',
        color : 'white',
        fontWeight : 800,
        fontSize : 20,
        textDecorationLine : 'none'
    }
    const commonStyle ={
        color : 'black',
        textDecorationLine : 'none'
    }

    return (
        <div>
            <ul>
                <li><NavLink to='/main' style={({isActive}) => isActive? activeStyle : commonStyle}>메인</NavLink></li>
                <li><NavLink to='/about' style={({isActive}) => isActive? activeStyle : commonStyle}>소개</NavLink></li>
                <li><NavLink to='/list' style={({isActive}) => isActive? activeStyle : commonStyle}>목록</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;