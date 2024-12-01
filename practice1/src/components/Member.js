// 멤버 페이지
import memberStyle from './Member.module.css';
import {Link} from 'react-router-dom';

function Member({member}){

    return(
        <Link to={`/list/${member.id}`} style={{textDecorationLine:'none'}}>
            <div className={memberStyle.member}>
                <h3>이름 : {member.name}</h3>
                <h3>연락처 : {member.phone}</h3>
                <h3>이메일 : {member.email}</h3>
                <h3>회사명 : {member.company.name}</h3>
            </div>
        </Link>
    );
}

export default Member;