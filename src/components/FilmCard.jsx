import { useState } from "react";
import classnames from "classnames";
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
 <div className={classnames('film-card')}>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
            <img src={props.img}/>
            <h4>{props.genre}</h4>
            <h3>{props.creatorName}</h3>
            <p>Понравилось : {props.likes + Number(isLiked)}</p>
            <p>НЕ Понравилось : {props.dislikes + Number(isDisLiked)}</p>
            <button 
                onClick={handleLike}
                className={classnames('btn-base' ,{ 'btn-liked' : isLiked})}
            >
                Лайкнуть
            </button>
            <button 
                onClick={handleDisLike}
                className={classnames('btn-base' ,{ 'btn-disLiked' : isDisLiked})}
            >
                Дизлайкнуть
            </button>
        </div>
    )
}
export default FilmCard