import { useState } from 'react'
import FilmCard from './components/FilmCard.jsx'
import MovieWatched from './components/MovieWactched.jsx'
import './App.css'
//плакатики
import PH from './assets/PearlHarbor_Poste.jpg'
import SO from './assets/SpaceOdyssey_Poste.jpg'
import TEK from './assets/Tekkenmovie_Poste.jpg'
import TRF from './assets/Transformers_Poste.jpg'

import { v4 } from "uuid"
import { useEffect } from 'react'
import classnames from "classnames"

export default function App() {
  //юзстэйты
 const [likedFilms, setLikedFilms] = useState([])
 const [disLikedFilms, setDisLikedFilms] = useState([])
 const[movieDB, setMovieDB] = useState([])
 
//это юзстейт для фильтра
 const [filter, setFilter] = useState({
  title: '',
  yearFrom: '',
  yearTo: '',
  genre: ''
 })
 //здесь честно не хотел писать стрелочную ибо не умею и так удобнее даже ибо проще обратиться к одной
 // само setFilter({...filter, [name]: value означает что функция берёт нэйм и обновляет только это поле
 function handleFilter(event){
  const name = event.target.name
  const value = event.target.value
  setFilter({...filter, [name]: value
})
 }
 
 // здесь мы перенесли в юзэффект для имитации апи
 //мог ещё сэттаймлайн но в задании не сказано
 useEffect(()=>{

      setMovieDB([{
        id: v4(),
        name: "Космическая Одиссея 2001",
        creator: "Стэнли Кубрик",
        img: SO,
        genre: "Научная фантастика",
        year: 1968,
        liked: 168,
        disliked: 87
      },
      {
        id: v4(),
        name: "Пёрл - Харбор",
        creator: "Майкл Бэй",
        img: PH,
        genre: "Экшн",
        year: 2003,
        liked: 137,
        disliked: 27
      },
      {
        id: v4(),
        name: "Трансформеры",
        creator: "Майкл Бэй",
        img: TRF,
        genre: "Экшн",
        year: 2001,
        liked: 178,
        disliked: 27
      },
      {
        id: v4(),
        name: "Теккен",
        creator: "Дуайт Х. Литтл",
        img: TEK,
        genre: "Боевик",
        year: 2006,
        liked: 168,
        disliked: 87
      }]
      //уже комментарий для себя это что это чтобы функция по сто раз не повторялась
 )},[])
//тожн шпаргалка для себя уже  как удобно сделать лайк-дизлайк и в лист понравившихся и не понравившихся
//в обычном джс используют сплайс но... я забыл чё это да и в реакте так нельзя
//.filter() не меняет исходный массив, он создает новый массив, 
// в который кладет только те фильмы (f), имя которых не совпадает (!==) с тем фильмом (film), на который мы кликнули.
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

let filteredMovies = [] 
//здесь самый простой цикл for of
for (let film of movieDB) {
  if (
    //если поле введеное пусток или если оно не пустое, то имя фильма должно совпадать с тем, что ввели а И чтобы проверить всё это одновременно
    (filter.title === '' || film.name === filter.title) &&
    (filter.yearFrom === '' || film.year >= filter.yearFrom) &&
    (filter.yearTo === '' || film.year <= filter.yearTo) &&
    (filter.genre === '' || film.genre === filter.genre)
  ) {
    //а здесь пуш чтобы всё это запихнуть
    filteredMovies.push(film)
  }
}
 
  return(
    <div>
<div>
        <h4 className={classnames('filter-name')}>Фильтр</h4>
        <input name="title" value={filter.title} onChange={handleFilter}></input>
        <input name="yearFrom" value={filter.yearFrom} onChange={handleFilter}></input>
        <input name="yearTo" value={filter.yearTo} onChange={handleFilter}></input>
        <select name="genre" value={filter.genre} onChange={handleFilter}>
          <option value="">Все жанры</option>
          <option value="Научная фантастика">Научная фантастика</option>
          <option value="Экшн">Экшн</option>
          <option value="Боевик">Боевик</option>
        </select>
      </div>

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


