import './anime-recommendation.css';
import AnimeInfo from '../3/anime-info';
import { Recommendation, Anime, TabType, Tab} from '../12/data';

interface AnimeRecommendationProps{
    recommendation: Recommendation;
    addTab: (anime: Anime, type: TabType) => void;
    tabs: Tab[];
}


function AnimeRecommendation({recommendation, addTab, tabs}: AnimeRecommendationProps){
    


    return<>
        <section className='anime-rec'>
            <div className='anime-list-wrap-img'>
                <AnimeInfo animeEntry={recommendation.anime1} addTab={addTab} tabs={tabs}/>

                <AnimeInfo animeEntry={recommendation.anime2} addTab={addTab} tabs={tabs}/>
            </div>

            <p className='anime-list-p'>{recommendation.content}</p>
        </section>
    </>;
};

export default AnimeRecommendation;