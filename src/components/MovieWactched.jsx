import React from "react"
import { useState, useEffect } from "react"
//здесь баг но я думаю как это пофиксить
function MovieWatched(props){
    const [watched, setWatched] = useState(0)
    useEffect(() =>{
      if (props.liked + props.disliked) {
        setWatched(watched + 1)
      }
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
            <h2 style={{ color: 'blue' }}>Просмотрено: {watched}</h2>
        </div>
    ) 
}

export default MovieWatched