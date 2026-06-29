import {react, useState , useContext} from 'react'
import classnames from 'classnames'
import FilmFilter from './FilmFilter.jsx'
import FilmCard from './FilmCard.jsx'
import MovieWatched from './MovieWactched.jsx'
import {FiltrMovii} from './Utils.js'
import PLC from '../assets/PLC.png'
import { createCont } from './ThemeToggle.jsx'

function RetSubStiTution({ filter, handleFilter, movieDB, likedFilms, disLikedFilms, handleListLike, handleListDisLike }){
  let filteredMovies = FiltrMovii(movieDB, filter)
  const { themes } = useContext(createCont)
  return(
      <div className={classnames(themes)}>
      <FilmFilter filter={filter} handleFilter={handleFilter} />
      {filteredMovies.map((film)=>(
        <div key={film.id}>
        <FilmCard id ={film.id} title={film.name} date={film.year} creatorName={film.creator} genre={film.genre} img={film.img[0] || PLC } likes={film.liked} dislikes={film.disliked} onLike={handleListLike} onDisLike={handleListDisLike}/>
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