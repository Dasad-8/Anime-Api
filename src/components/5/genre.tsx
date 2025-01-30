import './genre.css';
import { SetValue } from '../../App';

interface GenreProps{
    genre: any;
    setSearchGenre: SetValue<number | undefined>;
    searchGenre: number | undefined; 
    getResponse4: (mal_id: number)=> Promise<void>;
    genreList: any[] | null;
}

function Genre({genre, setSearchGenre, searchGenre, getResponse4, genreList} : GenreProps) {
    
function onClickGenre(mal_id:number) {
    setSearchGenre(mal_id);
    getResponse4(mal_id);
}
    return<>
    {<ol className='genre-tabs-ol'>{genre.map((genre:any, index: number) => (
        <li className='genre-tabs-li' key={index}>
            <button className={(searchGenre === genre.mal_id) ? 'activ_btn' :  ""} onClick={()=>{onClickGenre(genre.mal_id);}}>{genre.name}</button>
        </li>
    ))}</ol>}
    </>
};

export default Genre;