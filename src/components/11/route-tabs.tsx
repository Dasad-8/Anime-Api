import { useState } from 'react';
import Tabs from '../10/tabs';
import TabsLoader from '../10/tabs-loader';
import { SetValue, Tab, TabType } from '../12/data';
import TabInfo from '../14/tab-info';
import Updates from '../15/updates';
import History from '../16/history';

interface RouteTabsProps{
    tabs: Tab[];
    setTabs: SetValue<Tab[]>;
}

function RouteTabs({tabs, setTabs}: RouteTabsProps) {
    
    const [selectedTab, setSelectedTab] = useState<string>("All");

    const [searchTabsAnime, setSearchTabsAnime] = useState <string> ("");

    function deleteTab(UUId: string) {
        let newTabs = [...tabs];
        setTabs(newTabs.filter((tab :Tab) => tab.UUId !== UUId));
    };

    function moveTab(UUId: string, newTab: TabType) { //
        let newTabs = [...tabs];
        setTabs(newTabs.map((tab: Tab)=>{
            if (tab.UUId === UUId) {
                return {...tab, type: newTab, date: new Date()}
            }else {
                return tab
            }
        }))
    }

    return<>
        <Tabs setSelectedTab={setSelectedTab} searchTabsAnime={searchTabsAnime} setSearchTabsAnime={setSearchTabsAnime}/>

        {<ol className='tabs-anime-ol'>
            {(selectedTab === "Updates") ? <Updates  tabs={tabs}/> :(selectedTab === "History") ? <History  tabs={tabs}/> :
            (tabs.length > 0) ?
            <>{tabs
                .filter((tab: Tab)=> tab.anime.title.toUpperCase().includes(searchTabsAnime.toUpperCase()) /* === true */)
                .filter((tab: Tab)=>selectedTab === tab.type || selectedTab === "All")
                .map((tab: Tab, index: number) => (
                    <TabInfo key={index}  tab={tab} deleteTab={deleteTab} moveTab={moveTab}/>)
                )}</>: (tabs != null) ? <><li className='tabs-anime-li' >Please add anime to the list</li></> :
            <>
                <TabsLoader/>
                <TabsLoader/>
            </>
            }
        </ol>}
    </>
};

export default RouteTabs;



/* <ol className='tabs-anime-ol'>
            {(tabs.length > 0) ?
            <>{tabs
                .map((tab: Tab, index: number) => ({...tab, oldIndex: index}))
                .filter((tab: Tab)=> tab.anime.title.toUpperCase().includes(searchTabsAnime.toUpperCase()))
                .filter((tab: Tab)=>selectedTab === tab.type || selectedTab === "All")
                .map((tab: any, index: number) => (
                    <li className='tabs-anime-li' key={index}>{tab.anime.title} <button onClick={()=>deleteTab(tab.oldIndex)} className='tabs-btn'><img src="./img/trash3.svg" alt="error" /></button></li>)
                )}</>: (tabs != null) ? <><li className='tabs-anime-li' >Please add anime to the list</li></> :
            <>
                <TabsLoader/>
                <TabsLoader/>
            </>
            }
        </ol>*/