
export function FiltrMovii(movieDB, filter){

    let filteredMovies = []
        for (let film of movieDB) {
        if (
            (filter.title === '' || film.name === filter.title) &&
            (filter.yearFrom === '' || film.year >= filter.yearFrom) &&
            (filter.yearTo === '' || film.year <= filter.yearTo) &&
            (filter.genre === '' || film.genre === filter.genre)
        ) {
            filteredMovies.push(film)
        }
        }
        return filteredMovies
    }