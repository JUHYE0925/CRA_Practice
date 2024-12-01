import useGetList from '../API/memberListAPI';

export default function GetMemberDetail(id){
    const list = useGetList();
    if(list){
        return list.filter(member => member.id === parseInt(id))[0]
    }
}