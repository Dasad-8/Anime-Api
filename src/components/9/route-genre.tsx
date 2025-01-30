import AnimeSearch from '../6/anime-search';
import Genre from '../5/genre';
import AnimeInfoLoader from '../3/anime-info-loader';
import { useState } from 'react';
import { useEffect } from 'react';


function RouteGenre() {

    const [genre, setGenre] = useState <any[]> ([]);
    const [genreList, setGenreList] = useState<any [] | null> (null);
    const [searchGenre, setSearchGenre] = useState <number> ();

    async function getResponse3():  Promise<void> {
        const response = await fetch('https://api.jikan.moe/v4/genres/anime');
        let content = await response.json();
        setGenre(content.data);
    
        console.log(content);
      };
    
    async function getResponse4(mal_id: number): Promise<void> {
        setGenreList([]);
        const response = await fetch (`https://api.jikan.moe/v4/anime?genres=${mal_id}`);
        let content = await response.json();
        setTimeout(() => {
          setGenreList(content.data);
        }, 300);
    
        console.log(content)
      };

      useEffect(()=>{
        getResponse3();
      }, []);

    return<>
        <Genre genreList={genreList} getResponse4={getResponse4} searchGenre={searchGenre} setSearchGenre={setSearchGenre} genre={genre}/>
        {
            (genreList === null) ? <></> : (genreList.length === 0) ? <>
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />

            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            </> :<ol className='anime-list-ol'>
                {(genreList).map((anime: any, index: number) => <li className='anime-list-li' key={index}>
                    <AnimeSearch anime={anime}/>
                </li>)}
            </ol>
        }
    </>
};

export default RouteGenre;