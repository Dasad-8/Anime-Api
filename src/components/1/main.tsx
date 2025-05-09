import './main.css';
import { Route, Routes } from 'react-router-dom';
import RouteGenre from '../9/route-genre';
import RouteSearch from '../8/route-search';
import RouteHome from '../7/route-home';
import RouteTabs from '../11/route-tabs';
import { Tab, TabType } from '../12/data.ts';
import { Anime } from '../12/data.ts';
import RouteNews from '../13/route-news.tsx';

import useLocalStorage from '../hooks/useLocalStorage.ts'

import { v4 as uuidv4 } from 'uuid';


interface MainProps {
    search: string;
}

function Main({search}: MainProps) {

    const { value: tabs, setValueWithLocalStorage: setTabs } = useLocalStorage<Tab[]>("tabs", "./tabs-list-default.json");

    const addTab = (anime: Anime, type: TabType) => {
        const tabData: Tab = {
            type,
            anime, 
            date: new Date(),
            UUId: uuidv4()
        };
        const newTabs = [...tabs, tabData];
        setTabs(newTabs);
    }

    return <>
        <Routes>
            <Route path="/" element={<RouteHome addTab={addTab} tabs={tabs}/>} />

            <Route path="/search" element={<RouteSearch search={search} tabs={tabs} addTab={addTab}/>} />

            <Route path='/genre' element={<RouteGenre tabs={tabs} addTab={addTab}/>} />

            <Route path='/tabs' element={<RouteTabs tabs={tabs} setTabs={setTabs}/>} />

            <Route path='/new' element={<RouteNews tabs={tabs}/>} />
        </Routes>
    </>
}

export default Main;