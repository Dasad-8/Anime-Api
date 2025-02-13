import { useState } from 'react';
import Tabs from '../10/tabs';
import TabsLoader from '../10/tabs-loader';
import { Tab, TabType } from '../12/data';

interface RouteTabsProps{
    tabs: Tab[];
}

function RouteTabs({tabs}: RouteTabsProps) {
    
    const [selectedTab, setSelectedTab] = useState<string>("All");

    const [searchTabsAnime, setSearchTabsAnime] = useState <string> ("");

    return<>
        <Tabs setSelectedTab={setSelectedTab} searchTabsAnime={searchTabsAnime} setSearchTabsAnime={setSearchTabsAnime}/>

        <ol className='tabs-anime-ol'>
            {(tabs.length > 0) ? 
            <>{tabs
                .filter((tab: Tab)=> tab.anime.title.toUpperCase().includes(searchTabsAnime.toUpperCase()) /* === true */)
                .filter((tab: Tab)=>selectedTab === tab.type || selectedTab === "All")
                .map((tab: Tab, index: number) => (
                    <li className='tabs-anime-li' key={index}>{tab.anime.title}</li>)
                )}</> : 
            <>
                <TabsLoader/>
                <TabsLoader/>
            </>
            }
        </ol>
    </>
};

export default RouteTabs;