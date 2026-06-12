import { useState } from 'react'
import FilmCard from './components/FilmCard.jsx'
import MovieWatched from './components/MovieWactched.jsx'
import FilmFilter from './components/FilmFilter.jsx'
import FilmPage from './components/FilmPage.jsx'
import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import './App.css'
//плакатики
import PH from './assets/PearlHarbor_Poste.jpg'
import SO from './assets/SpaceOdyssey_Poste.jpg'
import TEK from './assets/Tekkenmovie_Poste.jpg'
import TRF from './assets/Transformers_Poste.jpg'
import INT from './assets/Inception_Poste.jpg'

import RetSubStiTution from './components/RetSubStiTution.jsx'
import { v4 } from "uuid"
import { useEffect } from 'react'
import classnames from "classnames"

export default function App() {
  //юзстэйты
 const [likedFilms, setLikedFilms] = useState([])
 const [disLikedFilms, setDisLikedFilms] = useState([])
 const[movieDB, setMovieDB] = useState([])
 const [searchPars, setSearchPars] = useSearchParams()
//это юзстейт для фильтра
const filter = {
  title: searchPars.get('search') || '',
  yearFrom: searchPars.get('date_from') || '',
  yearTo: searchPars.get('date_to') || '',
  genre: searchPars.get('genre') || '' 
}
 //здесь честно не хотел писать стрелочную ибо не умею и так удобнее даже ибо проще обратиться к одной
 // само setFilter({...filter, [name]: value означает что функция берёт нэйм и обновляет только это поле
 function handleFilter(event){
  //конст для переводчик
  const trans = {
    title: 'search',
    yearFrom: 'date_from',
    yearTo: 'date_to',
    genre: 'genre'
  }
  const urlName = trans[event.target.name]
  
  setSearchPars({
    search: searchPars.get('search') || '',
    date_from: searchPars.get('date_from') || '',
    date_to: searchPars.get('date_to') || '',
    genre: searchPars.get('genre') || '',
  [urlName]: event.target.value
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
      },
    {
      id: v4(),
      name: "Начало",
      creator: "Кристофер Нолан",
      img: INT,
      genre: 'Боевик',
      year: 2010,
      liked: 345,
      disliked: 45
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


 
  return(
    <div>
      
      <Routes>
      <Route path='/' element={<RetSubStiTution filter={filter}
          handleFilter={handleFilter}
          movieDB={movieDB}
          likedFilms={likedFilms}
          disLikedFilms={disLikedFilms}
          handleListLike={handleListLike}
          handleListDisLike={handleListDisLike}/>}>
      
      </Route>
    <Route path='/film/:id' element={<FilmPage 
        movieDB={movieDB} 
        handleListLike={handleListLike} 
        handleListDisLike={handleListDisLike} 
    />} />
    </Routes>
    </div>

 )
}


