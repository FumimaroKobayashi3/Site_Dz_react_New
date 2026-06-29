import { act, useCallback, useReducer, useState } from 'react'
import FilmCard from './components/FilmCard.jsx'
import MovieWatched from './components/MovieWactched.jsx'
import FilmFilter from './components/FilmFilter.jsx'
import FilmPage from './components/FilmPage.jsx'
import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import './App.css'
import MoviesList from './components/Data.js'
import RetSubStiTution from './components/RetSubStiTution.jsx'
import { useEffect } from 'react'
import classnames from "classnames"
import ThemeToggle, {createCont} from './components/ThemeToggle.jsx'


function HandleRed(state, action) {
  //здесь каюсь прибеугнул к нейронку чтобы понять как работает свитч-кейз. не обессуйте пожалуйста. это только этот кусок
//переменные для фильтра айдишек
  let filteredLiked = state.likedFilms.filter(id => id !== action.payload)
  let filteredDisLiked = state.disLikedFilms.filter(id => id !== action.payload)

switch (action.type) {
    case 'like':
      return {
        // Проверяем, был ли фильм в лайках используя элемент [0]
        // Если был — очищаем массив. если нет - добавляем в конец
        //filter(id => id === action.payload)[0] это надо потому что я не пишу код который не понимаю
        likedFilms: state.likedFilms.filter(id => id === action.payload)[0] ? filteredLiked : [...filteredLiked, action.payload],
        // Из дизлайков этот фильм в любом случае стираем
        disLikedFilms: filteredDisLiked
      }
      //зеркально
    case 'disLike':
      return {

        likedFilms: filteredLiked,
        disLikedFilms: state.disLikedFilms.filter(id => id === action.payload)[0] ? filteredDisLiked : [...filteredDisLiked, action.payload]
      }

    default:
      return state
  }
}

export default function App() {
  //юзстэйты
  //здесь я удалил для лайкед и дизлайкед и поставил юзредюсер
  const [state, dispatch] = useReducer(HandleRed, {likedFilms:[], disLikedFilms:[]})
 const[movieDB, setMovieDB] = useState([])
 const [searchPars, setSearchPars] = useSearchParams()
 const [themes, setThemes] = useState('theme-light')

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
useEffect(() => {
  setMovieDB(MoviesList)
  //уже комментарий для себя это что это чтобы функция по сто раз не повторялась
}, [])

//перелопатил хэндл
//здесь диспатч
//а также для полной работы здесь юзколлбэк
//он нужен чтобы всё относительно работало
const handleListLike = useCallback((id)=> {
  dispatch({ type: 'like', payload: id })
}, [])

const handleListDisLike = useCallback((id) => {
  dispatch({ type: 'disLike', payload: id })
},[])
// функция для туггл

    function themeTog(){
        //тут я загуглил про свитч-кейс чтобы проще было менять темку
        switch (themes) {
            case 'theme-light':
                setThemes('theme-dark')
                break
            case 'theme-dark':
                setThemes('theme-light')
                break
            default:
                setThemes('theme-light')
                break
        }
    }
  return(
    <createCont.Provider value={{themes, themeTog}}>
    <div className={classnames(themes)} style={{ minHeight: '100vh' }}>
      <header style={{ position: 'absolute', right: '20px', top: '20px' }}>
        <ThemeToggle/>
      </header>
      <Routes>
      <Route path='/' element={<RetSubStiTution filter={filter}
          handleFilter={handleFilter}
          movieDB={movieDB}
          likedFilms={state.likedFilms}
          disLikedFilms={state.disLikedFilms}
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
    </createCont.Provider>

 )
}


