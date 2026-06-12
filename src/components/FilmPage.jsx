//это я писал через нейронку потому что по большей 
// части я занимался раздроблением кода на компоненты и сильно устал

import { useParams, Link } from "react-router-dom"
import FilmCard from './FilmCard'

function FilmPage({ movieDB, handleListLike, handleListDisLike }){
    const { id } = useParams()
    //здесь блин нейронный  костыль чтобы эта чепушня видела не кракозябру а русские буквы
    //потомцу что я знаю мы проходили %D0%A2%D0%B5%D0%BA краказябру но блин мне надо чтобы вы видели что всё работает
    //ради этого можно и принципы нарушить
    const kostyl = decodeURIComponent(id) 
    let Folm = undefined
    for(let i of movieDB){
        if (i.id === kostyl || i.name === kostyl){
            Folm = i
        }
    }
    
    if (Folm === undefined) {
        return <h2>Если вы это видите значит здесь ошибка</h2>
    } 
        
    return (
        <div style={{ padding: '20px' }}>
            <Link to="/" style={{ display: 'block', marginBottom: '20px', color: 'blue' }}>
                Назад
            </Link>
            
            <FilmCard 
                title={Folm.name} 
                date={Folm.year} 
                creatorName={Folm.creator} 
                genre={Folm.genre} 
                img={Folm.img} 
                likes={Folm.liked} 
                dislikes={Folm.disliked} 
                onLike={handleListLike} 
                onDisLike={handleListDisLike}
            />
        </div>
    )
}

export default FilmPage