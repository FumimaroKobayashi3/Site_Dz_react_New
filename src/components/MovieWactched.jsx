import React from "react"
import { useState, useEffect } from "react"

function MovieWatched(props){
    const [watched, setWatched] = useState([])
    useEffect(() =>{
        //ради этого я блин выучил как работает set
        const wotched = new Set([...watched, ...props.liked, ...props.disliked])
    setWatched([...wotched])
    },[props.liked, props.disliked])

 return (
        <div style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            backgroundColor: 'lightblue', 
            padding: '15px', 
            border: '2px solid blue',
            borderRadius: '10px',
            zIndex: 1000
        }}>
            <h2 style={{color: 'blue'}}>Список просмотреных фильмов</h2>
            <h2 style={{ color: 'blue' }}>Просмотрено: {watched.length}</h2>
        </div>
    ) 
}

export default MovieWatched