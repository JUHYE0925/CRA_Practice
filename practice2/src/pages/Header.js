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

    const btnStyle {
        
    }

    return(
        <div>
         <img style={logoStyle} src="/images/CollaTime-Logo.png" alt="콜라타임 로고"/>
         <div>로그인</div>
         <div>회원가입</div>
        </div>
    );
}

export default Header;