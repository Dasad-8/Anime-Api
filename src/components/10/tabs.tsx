import './tabs.css';
import { TabType } from '../12/data';
import { SetValue } from '../12/data';
import { useRef} from 'react';
/* import TabsLoader from './tabs-loader'; */

interface TabsProps{
    setSelectedTab: SetValue<string>;
    searchTabsAnime: string;
    setSearchTabsAnime: SetValue<string>
}

function Tabs({setSelectedTab, searchTabsAnime ,setSearchTabsAnime}: TabsProps) {
    
    const searchTabsAnimeRef = useRef<HTMLInputElement>(null);
    function onSearchTabsAnime() {
        if (searchTabsAnimeRef.current !== null) {
            const refValue = searchTabsAnimeRef.current.value;
            setSearchTabsAnime(refValue);
        }
    }

    return <>
        <h1 className='tabs-h1'>Your tabs</h1>

        <div className='search flex-tabs-search'>
                <p className='tabs-search-p'>Search {searchTabsAnime}</p>
                <input onInput={onSearchTabsAnime} ref={searchTabsAnimeRef} className='search-input' type="text" />
                <button  className='search-btn'>Apply</button>
        </div>

        <ol className='genre-tabs-ol'>
            {/* {Object
                .values(TabType)
                .map((type: TabType) => type as string)
                .concat(["All", "Updates", "History"])
                .map((type: string, _: number) => (
                <li onClick={()=>setSelectedTab(type)} key={type} className='genre-tabs-li'><button className='tabs-btn'>{type}</button></li>
            ))} */}
            {Object
                .values(TabType)
                .map((type: string) => (
                <li onClick={()=>setSelectedTab(type)} key={type} className='genre-tabs-li'><button className='tabs-btn'>{type}</button></li>
            ))}
            <li onClick={()=>setSelectedTab("All")} className='genre-tabs-li'><button className='tabs-btn'>All</button></li>
            <li onClick={()=>setSelectedTab("Updates")} className='genre-tabs-li'><button className='tabs-btn'>Updates</button></li>
            <li onClick={()=>setSelectedTab("History")} className='genre-tabs-li'><button className='tabs-btn'>History</button></li>
        </ol>
        
    </>
};

export default Tabs;