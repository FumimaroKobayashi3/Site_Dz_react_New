import { useState } from "react";
import React from "react";
function FilmCard(props){
    const [isLiked, setIsLiked] = useState(0)
    const [isDisLiked, setIsDisLiked] = useState(0)
    //самый простой хэндл сделал чтобы не тупить
    function handleLike(){
        if (isLiked === 0){
            setIsLiked(1)
            setIsDisLiked(0)
            props.onLike(props.title)
        }else{
            setIsLiked(0)
            setIsDisLiked(0)
            props.onLike(props.title)
        }
    }

    function handleDisLike(){
        if (isDisLiked === 0){
            setIsDisLiked(1)
            setIsLiked(0)
            props.onDisLike(props.title)
        }else{
            setIsDisLiked(0)
            setIsLiked(0)
            props.onDisLike(props.title)
        }
       
    }

    return(
 <div style={{ display: 'flex', flexDirection: "column", padding: '24px', border: '1px solid black', margin: '10px' }}>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
            <h4>{props.genre}</h4>
            <h3>{props.creatorName}</h3>
            <p>Понравилось : {props.likes + Number(isLiked)}</p>
            <p>НЕ Понравилось : {props.dislikes + Number(isDisLiked)}</p>
            <button 
                onClick={handleLike}
                style={{
                    backgroundColor: isLiked ? 'green' : 'gray',
                    color: isLiked ? 'white' : 'black'
                }}
            >
                Лайкнуть
            </button>
            <button 
                onClick={handleDisLike}
                style={{
                    backgroundColor: isDisLiked ? 'red' : 'gray',
                    color: isDisLiked ? 'white' : 'black'
                }}
            >
                Дизлайкнуть
            </button>
        </div>
    )
}
export default FilmCard