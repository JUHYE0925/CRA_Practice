// 헤더 페이지


function Header(){
    const logoStyle = {
        width : 186,    
        height : 67,
        position : 'absolute',
        left : 130,
        top : 30,
        cursor : 'pointer'
    }

    const btnStyle = {
        color : black,
        display : 'inline-block'
    }

    return(
        <div>
         <img style={logoStyle} src="/images/CollaTime-Logo.png" alt="콜라타임 로고"/>
         <div style={btnStyle}>로그인</div>
         <div style={btnStyle}>회원가입</div>
        </div>
    );
}

export default Header;