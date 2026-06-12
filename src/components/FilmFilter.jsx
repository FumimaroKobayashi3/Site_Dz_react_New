import classnames from 'classnames'

function FilmFilter({ filter, handleFilter }){

    return(
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
    )
}
export default FilmFilter