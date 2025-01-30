import './anime-info.css';
import { Anime } from '../12/data';

interface AnimeInfoProps{
    animeEntry: Anime;
    addTab: (animeName: string) => void;
}

function AnimeInfo({animeEntry, addTab}: AnimeInfoProps) {
    


    return<>
        <section>
            <img className='anime-list-img' src={animeEntry.img} alt="error" />

            <h2 className='anime-list-h2'>{animeEntry.title}</h2>

            <button><a className='anime-list-a' href={animeEntry.url}>view</a></button>
            <button onClick={addTab} className='anime-list-btn'><img className='anime-list-btn-img' src="./img/1077035.png" alt="error" /></button>
        </section>
    </>
};

export default AnimeInfo;