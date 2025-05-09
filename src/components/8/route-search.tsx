import AnimeInfoLoader from "../3/anime-info-loader";
import { Anime, Tab, TabType } from "../12/data";
import { useEffect, useState } from "react";
import { mapToAnime } from "../12/data";
import AnimeInfo from "../3/anime-info";
import { useCallback } from "react";


interface RouteSearchProps {
    search: string;
    tabs: Tab[];
    addTab: (anime: Anime, type: TabType) => void;
}

function RouteSearch({ search, tabs, addTab}: RouteSearchProps) {

    const [searchApi, setSearchApi] = useState<Anime[]>([]);

    /* async function getResponse(): Promise<void> {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        const content = await response.json();
        setTimeout(() => {
            setSearchApi(content.data.map(mapToAnime));
        }, 300);
    }; */

    
    const getResponse =useCallback(async ()=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        const content = await response.json();
        setTimeout(() => {
            setSearchApi(content.data.map(mapToAnime));
        }, 300);
    }, [search]);

    useEffect(() => {getResponse()}, [getResponse]);

    const [pageIndex, setPageIndex] = useState<number>(0);

    const totalPages = Math.floor((searchApi.length - 1) / 8) + 1;

    function pageNumber(right: boolean) {
        if (pageIndex > 0 && right === false) {
            setPageIndex(pageIndex - 1);
        }if (pageIndex < totalPages - 1 && right === true) {
            setPageIndex(pageIndex + 1);
        }
    }

    return <>
        {(searchApi.length === 0) ? <>
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />

            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
        </> : <ol className='anime-list-ol'>
            {searchApi.slice(pageIndex * 8, pageIndex * 8 + 8).map((anime: Anime, index: number) => (
                <li className='anime-list-li' key={index}>
                    <AnimeInfo addTab={addTab} tabs={tabs} animeEntry={anime} />
                </li>))}
            <li><button onClick={()=>{pageNumber(false)}}>last</button>
            <button onClick={()=>{pageNumber(true)}}>next</button></li>
            <p>{pageIndex}</p>
        </ol>
        }
    </>
};

export default RouteSearch;