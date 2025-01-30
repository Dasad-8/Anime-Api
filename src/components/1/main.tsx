import './main.css';
import { Route, Routes } from 'react-router-dom';
import RouteGenre from '../9/route-genre';
import RouteSearch from '../8/route-search';
import RouteHome from '../7/route-home';
import RouteTabs from '../11/route-tabs';

import useLocalStorage from '../hooks/useLocalStorage.ts'


interface MainProps {
    search: string;
}

function Main({search}: MainProps) {

    const { value: tabs, setValueWithLocalStorage: setTabs } = useLocalStorage<any>("tabs", "./tabs-list-default.json");

    const addTab = (animeName: string) => {
        let tabData = {
            animeName: animeName
        };
        let newTab = [...tabs];
        newTab.push(tabData);
        setTabs(newTab);
    }

    return <>
        <Routes>
            <Route path="/" element={<RouteHome addTab={addTab} />} />

            <Route path="/search" element={<RouteSearch search={search} />} />

            <Route path='/genre' element={<RouteGenre />} />

            <Route path='/tabs' element={<RouteTabs tabs={tabs} />} />
        </Routes>
    </>
}

export default Main;