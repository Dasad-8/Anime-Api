import AnimeInfoLoader from "../3/anime-info-loader";
import { Anime, Tab, TabType } from "../12/data";
import { useEffect, useState } from "react";
import { mapToAnime } from "../12/data";
import AnimeInfo from "../3/anime-info";


interface RouteSearchProps {
    search: string;
    tabs: Tab[];
    addTab: (anime: Anime, type: TabType) => void;
}

function RouteSearch({ search, tabs, addTab}: RouteSearchProps) {

    let [searchApi, setSearchApi] = useState<Anime[]>([]);

    async function getResponse(): Promise<void> {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        let content = await response.json();
        setTimeout(() => {
            setSearchApi(content.data.map(mapToAnime));
        }, 300);
    };

    useEffect(() => {getResponse()}, [search]);

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
            {searchApi.map((anime: Anime, index: number) => (
                <li className='anime-list-li' key={index}>
                    <AnimeInfo addTab={addTab} tabs={tabs} animeEntry={anime} />
                </li>))}
        </ol>}
    </>
};

export default RouteSearch;