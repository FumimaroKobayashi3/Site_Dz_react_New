import {react, useState } from 'react'
import classnames from 'classnames'
import FilmFilter from './FilmFilter.jsx'
import FilmCard from './FilmCard.jsx'
import MovieWatched from './MovieWactched.jsx'
function RetSubStiTution({ filter, handleFilter, movieDB, likedFilms, disLikedFilms, handleListLike, handleListDisLike }){
let filteredMovies = [];
    for (let film of movieDB) {
      if (
        (filter.title === '' || film.name === filter.title) &&
        (filter.yearFrom === '' || film.year >= filter.yearFrom) &&
        (filter.yearTo === '' || film.year <= filter.yearTo) &&
        (filter.genre === '' || film.genre === filter.genre)
      ) {
        filteredMovies.push(film);
      }
    }
  return(
      <div>
      <FilmFilter filter={filter} handleFilter={handleFilter} />
      {filteredMovies.map((film)=>(
        <div key={film.id}>
        <FilmCard title={film.name} date={film.year} creatorName={film.creator} genre={film.genre} img={film.img} likes={film.liked} dislikes={film.disliked} onLike={handleListLike} onDisLike={handleListDisLike}/>
        </div>
      ))}
    <div className={classnames('checkerColour')}>
     <h2 className={classnames('liked-title')}>Мне понравилось:</h2>
      {likedFilms.map((film)=>(
        <li key={film}>{film}</li>
      ))}<h2 className={classnames('disliked-title')}>Мне НЕ понравилось:</h2>
      {disLikedFilms.map((film)=>(
        <li key={film}>{film}</li>
      ))}
    <div>
      <MovieWatched liked={likedFilms} disliked={disLikedFilms}/>
    </div>
    </div>
    </div>
    )
}
export default RetSubStiTution