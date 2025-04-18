import './anime-info.css';
import { Anime, Tab, TabType } from '../12/data';
import { useState } from 'react';

interface AnimeInfoProps{
    animeEntry: Anime;
    addTab: (anime: Anime, type: TabType) => void;
    tabs: Tab[];
}

function AnimeInfo({animeEntry, addTab, tabs}: AnimeInfoProps) {
    
    const [activPopUp, setActivPopUp] = useState <boolean> (false);

    function closingPopUp() {
    setActivPopUp(false);
    };

    function isLiked(): boolean {
       for (let i = 0; i < tabs.length; i++){
            let tab = tabs[i]
            if (tab.anime.id === animeEntry.id) {
                return true
            }
       };
       return false
    };

    return<>
        <section>
            <img className='anime-list-img' src={animeEntry.img} alt="error" />

            <h2 className='anime-list-h2'>{animeEntry.title}</h2>

            <button><a className='anime-list-a' href={animeEntry.url}>view</a></button>
            <button onClick={()=>setActivPopUp(true)} /*  */ className='anime-list-btn'><img className='anime-list-btn-img' src={(isLiked()) ? "./img/heart-fill.svg" :"./img/1077035.png"} alt="error" /></button>

            <div className='pop-up' style={{display: (activPopUp === true) ? 'block' : 'none'}}>
                <div className='pop-up-content' onMouseLeave={()=>{closingPopUp()}}>
                    {Object.values(TabType).map((type: string, index: number) => (
                        <p className='pop-up-p' onClick={()=> {addTab(animeEntry, type as TabType); closingPopUp()}} key={type}>{type}</p>
                    ))}
                </div>
            </div>
        </section>
    </>
};

export default AnimeInfo;