import React, { useState, useContext, useMemo } from 'react'
import classnames from 'classnames'
import FilmFilter from './FilmFilter.jsx'
import FilmCard from './FilmCard.jsx'
import MovieWatched from './MovieWactched.jsx'
import { FiltrMovii } from './Utils.js'
import PLC from '../assets/PLC.png'
import { createCont } from './ThemeToggle.jsx'

function RetSubStiTution({ filter, handleFilter, movieDB, likedFilms, disLikedFilms, handleListLike, handleListDisLike }){
  
//сделал с юзмемо
  const filteredMovies = useMemo(() => {
    return FiltrMovii(movieDB, filter)
  }, [movieDB, filter.title, filter.yearFrom, filter.yearTo, filter.genre])

  const { themes } = useContext(createCont)
//остальное пустил да чтобы пофиксить ошибку из-за которой вылезала кракозябра
  return (
    <div className={classnames(themes)}>
      <FilmFilter filter={filter} handleFilter={handleFilter} />
      

      {filteredMovies.map((film) => (
        <div key={film.id}>
          <FilmCard 
            id={film.id} 
            title={film.name} 
            date={film.year} 
            creatorName={film.creator} 
            genre={film.genre} 
            img={film.img[0] || PLC} 
            likes={film.liked} 
            dislikes={film.disliked} 
            onLike={handleListLike} 
            onDisLike={handleListDisLike}
            isLiked={likedFilms.includes(film.id)}
            isDisLiked={disLikedFilms.includes(film.id)}
          />
        </div>
      ))}

      <div className={classnames('checkerColour')}>
        <h2 className={classnames('liked-title')}>Мне понравилось:</h2>
        {movieDB
          .filter(movie => likedFilms.includes(movie.id))
          .map(movie => <li key={movie.id}>{movie.name}</li>)
        }


        <h2 className={classnames('disliked-title')}>Мне НЕ понравилось:</h2>
        {movieDB
          .filter(movie => disLikedFilms.includes(movie.id))
          .map(movie => <li key={movie.id}>{movie.name}</li>)
        }
        <div>
          <MovieWatched liked={likedFilms} disliked={disLikedFilms}/>
        </div>
      </div>
    </div>
  )
}

export default RetSubStiTution