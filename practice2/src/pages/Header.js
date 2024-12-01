// 헤더 페이지


function Header(){
    const logoStyle = {
        width : 186,    
        height : 67,
        position : 'absolute',
        left : 132,
        top : 32,
        cursor : 'pointer'
    }

    return(
        <>
         <img style={logoStyle} src="/images/CollaTime-Logo.png" alt="콜라타임 로고"/>
        </>
    );
}

export default Header;