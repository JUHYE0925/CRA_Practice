import {useState, useEffect} from 'react'

export default function useGetList(){

    const [list, setList] = useState([]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log('json', json)
                setList(json);
            });
        }, []
    );

    return list;
}