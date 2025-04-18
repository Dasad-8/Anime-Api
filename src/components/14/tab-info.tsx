import { useState } from "react";
import { TabType } from "../12/data";
import { Tab } from "../12/data";
interface TabInfoProps {
    tab: Tab;
    deleteTab: (UUId: string) => void;
    moveTab: (UUId: string, newTab: TabType) => void;
}

function TabInfo({tab, deleteTab, moveTab}: TabInfoProps) {
    
    const [activPopUp, setActivPopUp] = useState <boolean> (false);

    function closingPopUp() {
    setActivPopUp(false);
    };

    return<>
        <div className='pop-up' style={{display: (activPopUp === true) ? 'block' : 'none'}}>
            <div className='pop-up-content'>
                {Object.values(TabType).map((type: string, index: number) => (
                    <p className='pop-up-p' onClick={()=> {moveTab(tab.UUId, type as TabType); closingPopUp()}} key={type}>{type}</p>
                ))}
            </div>
        </div>
        <li className='tabs-anime-li'>{tab.anime.title} 
            <div>
                <button onClick={()=>deleteTab(tab.UUId)} className='tabs-btn'><img src="./img/trash3.svg" alt="error" /></button>
                <button onClick={() => setActivPopUp(true)}><img src="./img/pencil-square.svg" alt="error" /></button>
            </div>
        </li>
    </>
}

export default TabInfo;