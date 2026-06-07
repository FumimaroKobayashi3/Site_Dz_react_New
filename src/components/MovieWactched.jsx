import React from "react"
import { useState, useEffect } from "react"
import classname from "classnames";
//здесь баг но я думаю как это пофиксить
function MovieWatched(props){
    const [watched, setWatched] = useState(0)
    useEffect(() =>{
      if (props.liked + props.disliked) {
        setWatched(watched + 1)
      }
    },[props.liked, props.disliked])

return (
        <div className={classname('watched-container')}>
            <h2 className={classname('watched-title')}>Список просмотреных фильмов</h2>
            <h2 className={classname('watched-title')}>Просмотрено: {watched}</h2>
        </div>
    )
}

export default MovieWatched