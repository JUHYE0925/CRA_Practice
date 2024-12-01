// 목록 페이지
import useGetList from '../API/memberListAPI';
import Member from '../components/Member';

function List(){

    const memberList = useGetList();

    return(
        <>
            <h3>목록</h3>
            <div>
                {memberList.map(member => <Member key={member.id} member={member}/>)}
            </div>
        </>
    );
}

export default List;