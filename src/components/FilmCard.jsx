import { useState, useMemo } from "react";
import classnames from "classnames";
import React from "react";
function FilmCard(props){
    //самый простой хэндл сделал чтобы не тупить
function handleLike() {
        props.onLike(props.id)
    }

    function handleDisLike() {
        props.onDisLike(props.id)
    }
   return (
        <div className={classnames('film-card')}>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
            <img src={props.img} alt={props.title} />
            <h4>{props.genre}</h4>
            <h3>{props.creatorName}</h3>
            
            <p>Понравилось : {props.likes + (props.isLiked ? 1 : 0)}</p>
            <p>НЕ Понравилось : {props.dislikes + (props.isDisLiked ? 1 : 0)}</p>
            
            <button 
                onClick={handleLike}
                className={classnames('btn-base', { 'btn-liked': props.isLiked })}
            >
                Лайкнуть
            </button>
            <button 
                onClick={handleDisLike}
                className={classnames('btn-base', { 'btn-disLiked': props.isDisLiked })}
            >
                Дизлайкнуть
            </button>
        </div>
    )
}
//в общем решил пойти так и завернул сам экспортдефолт в реактмемо
//почему? чтобы основной компонент не трогать вот почему
//Теперь React "запоминает" карточку. Если данные пропсы не изменились
export default React.memo(FilmCard)