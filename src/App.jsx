import { useState } from 'react'
import FilmCard from './components/FilmCard.jsx'
import MovieWatched from './components/MovieWactched.jsx'
import './App.css'
export default function App() {
 const [likedFilms, setLikedFilms] = useState([])
 const [disLikedFilms, setDisLikedFilms] = useState([])

function handleListLike(film){
  if (likedFilms.includes(film)){
    setLikedFilms(likedFilms.filter(f => f !== film))
  } else {
    setLikedFilms([...likedFilms, film])
    setDisLikedFilms(disLikedFilms.filter(f => f !== film))
  }
}

function handleListDisLike(film){
  if (disLikedFilms.includes(film)){
    setDisLikedFilms(disLikedFilms.filter(f => f !== film))
  } else {
    setDisLikedFilms([...disLikedFilms, film])
    setLikedFilms(likedFilms.filter(f => f !== film))
  }
}
 const movieDB = [{
  id: "00",
  name: "Космическая Одиссея 2001",
  creator: "Стэнли Кубрик",
  year: 1968,
  liked: 168,
  disliked: 87
 },
{
  id: "01",
  name: "Пёрл - Харбор",
  creator: "Майкл Бэй",
  year: 2003,
  liked: 137,
  disliked: 27
},
{
  id: "02",
  name: "Трансформеры",
  creator: "Майкл Бэй",
  year: 2001,
  liked: 178,
  disliked: 27
},
{
  id: "03",
  name: "Теккен",
  creator: "Дуайт Х. Литтл",
  year: 2006,
  liked: 168,
  disliked: 87
}]
 
 
  return(
    <div>
      {movieDB.map((film)=>(
        <div key={film.id}>
        <FilmCard title={film.name} date={film.year} creatorName={film.creator} likes={film.liked} dislikes={film.disliked} onLike={handleListLike} onDisLike={handleListDisLike}/>  
        </div>
      ))}
    <div style={{ position: 'fixed',  bottom: '20px',  left: '20px',  backgroundColor: 'beige',  color: 'brown', padding: '15px', border: '2px solid brown', borderRadius: '10px',  zIndex: 1000}}>
      <h2 style={{color: 'green'} }>Мне понравилось:</h2>
      {likedFilms.map((film)=>(
        <li key={film}>{film}</li>
      ))}<h2 style={{color: 'green'} }>Мне НЕ понравилось:</h2>
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


