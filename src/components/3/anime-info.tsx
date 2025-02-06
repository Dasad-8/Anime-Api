import './anime-info.css';
import { Anime, TabType } from '../12/data';
import { useState } from 'react';

interface AnimeInfoProps{
    animeEntry: Anime;
    addTab: (anime: Anime, type: TabType) => void
}

function AnimeInfo({animeEntry, addTab}: AnimeInfoProps) {
    
const [activPopUp, setActivPopUp] = useState <boolean> (false);

    return<>
        <section>
            <img className='anime-list-img' src={animeEntry.img} alt="error" />

            <h2 className='anime-list-h2'>{animeEntry.title}</h2>

            <button><a className='anime-list-a' href={animeEntry.url}>view</a></button>
            <button onClick={()=>setActivPopUp(true)} /*  */ className='anime-list-btn'><img className='anime-list-btn-img' src="./img/1077035.png" alt="error" /></button>

            <div className='pop-up' style={{display: (activPopUp === true) ? 'block' : 'none'}}>
                <div className='pop-up-content'>
                    {Object.values(TabType).map((type: string, index: number) => (
                        <p onClick={()=> addTab(animeEntry, type as TabType)} key={type}>{type}</p>
                    ))}
                </div>
            </div>
        </section>
    </>
};

export default AnimeInfo;