// 멤버 상세 소개
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import GetMemberDetail from "../API/GetMemberDetail";

function MemberDetail(){

    const {id} = useParams();

    // const [memberDetail, setMemberDetail] = useState({
    //     name : '',
    //     phone : '',
    //     email : '',
    //     username : '',
    //     address : {},
    //     company : {}
    // });

    // useEffect(
    //     () => {
    //         setMemberDetail(GetMemberDetail(id));
    //     }, [id]
    // );

    const memberDetail = GetMemberDetail(id);
    return(
        memberDetail?
        <div>
            <h3>이름 : {memberDetail.name}</h3>
        </div>:
        <div></div>
    );
}
export default MemberDetail;