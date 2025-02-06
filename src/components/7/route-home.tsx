import AnimeRecommendation from '../4/anime-recommendation';
import AnimeInfoLoader from '../3/anime-info-loader';
import { useState, useEffect } from 'react';
import { Recommendation, TabType, Anime, mapToRecommendation } from '../12/data';

interface RouteHomeProps{
    addTab: (anime: Anime, type: TabType) => void
};

function RouteHome({addTab} : RouteHomeProps) {
    
    let [recommendationList, setRecommendationList] = useState<Recommendation[]> ([]);

    async function getResponse(): Promise<void> {
        const response = await fetch('https://api.jikan.moe/v4/recommendations/anime');
        let content = await response.json();
        setTimeout(() => {
            setRecommendationList(content.data.map(mapToRecommendation))
        }, 300);
    
        console.log(content);
      };

      useEffect(()=>{getResponse()}, []);

    return <>
        <ol className='anime-list-ol'>{(recommendationList.length > 0) ? <>
            {recommendationList.map((recommendation: any, index: number) => (
                <li className='anime-list-li' key={index}>
                    <AnimeRecommendation recommendation={recommendation} addTab={addTab}/>
                </li>))}
            </> : <>
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />

            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            <AnimeInfoLoader />
            </>}
        </ol>
    </>
};

export default RouteHome;