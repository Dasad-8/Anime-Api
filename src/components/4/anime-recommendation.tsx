import './anime-recommendation.css';
import AnimeInfo from '../3/anime-info';
import { Recommendation, Anime, TabType} from '../12/data';

interface AnimeRecommendationProps{
    recommendation: Recommendation;
    addTab: (anime: Anime, type: TabType) => void;
}


function AnimeRecommendation({recommendation, addTab}: AnimeRecommendationProps){
    


    return<>
        <section className='anime-rec'>
            <div className='anime-list-wrap-img'>
                <AnimeInfo animeEntry={recommendation.anime1} addTab={addTab}/>

                <AnimeInfo animeEntry={recommendation.anime2} addTab={addTab}/>
            </div>

            <p className='anime-list-p'>{recommendation.content}</p>
        </section>
    </>;
};

export default AnimeRecommendation;