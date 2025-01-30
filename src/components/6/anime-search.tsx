import { Anime } from "../12/data";
import './anime-search.css';

interface AnimeSearchProps{
    anime: Anime;
}

function AnimeSearch({anime}: AnimeSearchProps) {
    


    return<>
    <div className='anime-list-wrap-img'>
        <img className='anime-list-img' src={anime.img} alt="error" />

        <h2 className='anime-list-h2'>{anime.title}</h2>

        <button><a className='anime-list-a' href={anime.url}>view</a></button>
    </div>

    <p className='anime-list-p'>{anime.content}</p>
    </>
};

export default AnimeSearch;