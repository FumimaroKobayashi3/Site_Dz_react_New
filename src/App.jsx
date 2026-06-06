import { useState } from 'react'
import FilmCard from './components/FilmCard.jsx'
import './App.css'
export default function App() {
 const [likedFilms, setLikedFilms] = useState([])
 const [disLikedFilms, setDisLikedFilms] = useState([])
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
        <FilmCard title={film.name} date={film.year} creatorName={film.creator} likes={film.liked} dislikes={film.disliked}/>  
        </div>
      ))}
    </div>
 )
}


