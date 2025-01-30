import './genres.css';
import { SetValue } from '../12/data';
import { Genre } from '../12/data';

interface GenreProps{
    genreList: Genre[];
    setGenreID: SetValue<number | undefined>;
    genreID: number | undefined; 
    getResponse4: (ID: number)=> Promise<void>;
}

function Genres({genreList, setGenreID, genreID, getResponse4} : GenreProps) {
    
function onClickGenre(ID:number) {
    setGenreID(ID);
    getResponse4(ID);
}
    return<>
    {<ol className='genre-tabs-ol'>{genreList.map((genre:Genre, index: number) => (
        <li className='genre-tabs-li' key={index}>
            <button className={(genreID === genre.ID) ? 'activ_btn' :  ""} onClick={()=>{onClickGenre(genre.ID);}}>{genre.name}</button>
        </li>
    ))}</ol>}
    </>
};

export default Genres;