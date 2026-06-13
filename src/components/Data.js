import { v4 } from "uuid"
import PH from '../assets/PearlHarbor_Poste.jpg'
import SO from '../assets/SpaceOdyssey_Poste.jpg'
import TEK from '../assets/Tekkenmovie_Poste.jpg'
import TRF from '../assets/Transformers_Poste.jpg'
import INT from '../assets/Inception_Poste.jpg'

const MoviesList = [{
    
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


export default MoviesList