import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Layouts'
import axios from 'axios';
import request from '../../../request';

export default function Todo() {
    
    const [todo, setTodo] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(request.get);
        setTodo(data);
    };

    useEffect(() => {
        getData();
        
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    return (
        
        <div>
            <Header></Header>
            Todo
            {todo.map((x, index) => (
                <div key={index}><p>{x.title}</p> <button onClick={handleClick}>Xóa</button></div>
            ))}
        </div>
    )
}
