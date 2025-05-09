import AnimeInfo from '../3/anime-info';
import Genres from '../5/genres';
import AnimeInfoLoader from '../3/anime-info-loader';
import { useState, useEffect } from 'react';
import { Anime, Genre, mapToAnime, mapToGenre, Tab, TabType } from '../12/data';

interface RouteGenreProps{
  addTab: (anime: Anime, type: TabType) => void;
  tabs: Tab[];
}

function RouteGenre({addTab, tabs}: RouteGenreProps) {

    const [genreList, setGenreList] = useState <Genre[]> ([]);
    const [animeList, setAnimeList] = useState<Anime[]> ();
    const [genreID, setGenreID] = useState <number> ();

    async function getResponse3():  Promise<void> {
        const response = await fetch('https://api.jikan.moe/v4/genres/anime');
        const content = await response.json();
        setGenreList(content.data.map(mapToGenre));
      };
    
    async function getResponse4(ID: number): Promise<void> {
        setAnimeList([]);
        const response = await fetch (`https://api.jikan.moe/v4/anime?genres=${ID}`);
        const content = await response.json();
        setTimeout(() => {
          setAnimeList(content.data.map(mapToAnime));
        }, 300);
      };

      useEffect(()=>{
        getResponse3();
      }, []);

    return<>
        <Genres getResponse4={getResponse4} genreID={genreID} setGenreID={setGenreID} genreList={genreList}/>
        {
            (animeList === undefined) ? <></> : (animeList.length === 0) ? <>
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />

            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            </> :<ol className='anime-list-ol'>
                {(animeList).map((anime: Anime, index: number) => <li className='anime-list-li' key={index}>
                    <AnimeInfo tabs={tabs} animeEntry={anime} addTab={addTab}/>
                </li>)}
            </ol>
        }
    </>
};

export default RouteGenre;