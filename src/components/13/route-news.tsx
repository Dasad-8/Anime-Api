import { useState, useEffect } from "react";
import { SetValue, Tab } from "../12/data";



interface RouteNews{
    tabs: Tab[];
    setTabs: SetValue<Tab[]>
}

function RouteNews({tabs, setTabs}: RouteNews) {
    
    let [newsList, setNewsList] = useState<any[]>([]);

    async function getResponse(): Promise<void> {
        let allNews: any[] = [];
        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            const animeID = tab.anime.id;
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}/news`);
            let content = await response.json();
            allNews = [...allNews, ...content.data];
        }

        const uniqueNews = allNews.filter((news, index, self) =>
            index === self.findIndex((n) => n.mal_id === news.mal_id)
        );

        setNewsList(uniqueNews);
    }

    useEffect(() => {
        getResponse();
    }, []);
    

    return<>
        <h1>News</h1>
        <ol>{newsList.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((news:any, index:number)=>(
            <li key={index}>
                <h2><a href={news.forum_url}>{news.title}</a></h2>
                <p>{news.excerpt}</p>
                <p>{news.author_username}</p>
                <img src={news.images.jpg.image_url} alt="error" />
                <p>{news.date}</p>
            </li>
        ))}</ol>
    </>
};

export default RouteNews;



