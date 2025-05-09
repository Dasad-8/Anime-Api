import './route-news.css';
import { useState, useEffect, SyntheticEvent, useCallback } from "react";
import {News, Tab } from "../12/data";
import RouteNewsLoader from './route-news-loader';
import { format } from 'date-fns';
import {enUS} from 'date-fns/locale';



interface RouteNews{
    tabs: Tab[];
}

function RouteNews({tabs}: RouteNews) {
    
    const [newsList, setNewsList] = useState<News[]>([]);

    const getResponse = useCallback(async ()=> {
        let allNews: News[] = [];
        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            const animeID = tab.anime.id;
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}/news`);
            const content = await response.json();
            allNews = [...allNews, ...content.data];
        }

        const uniqueNews = allNews.filter((news, index, self) =>
            index === self.findIndex((n) => n.mal_id === news.mal_id)
        );

        setNewsList(uniqueNews);
    }, [tabs]);

    useEffect(() => {
        getResponse();
    }, [getResponse]);
    
    function placeholder(e : SyntheticEvent<HTMLImageElement, Event>) {
        const img = e.target as HTMLImageElement;
        
        img.src = './img/images.svg'
        img.style.objectFit = 'contain'
    }

    return<>
        <h1 className="news-h1">News</h1>
        <ol>{newsList.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((news:News, index:number)=>(
            <li className='news-list' key={index}>
                <div className='flex-container'>
                    <h2 className='news-link'><a href={news.forum_url}>{news.title}</a></h2>
                    <p className='news-p'>{news.excerpt}</p>
                    <p className='news-p news-author'>{news.author_username}</p>
                    <p className='news-p'>{format(news.date, "d MMMM yyyy", {locale: enUS})}</p>
                </div>
                {/* <img className='news-img' src={news.images.jpg.image_url} alt="error" /> */}

                {news.images.jpg.image_url == null || news.images.jpg.image_url == undefined || news.images.jpg.image_url.length === 0 ? (
                    <RouteNewsLoader />
                ) : (
                <img className='news-img' src={news.images.jpg.image_url} alt="error" onError={placeholder}/>
                )}
            </li>
        ))}</ol>
    </>
};

export default RouteNews;



