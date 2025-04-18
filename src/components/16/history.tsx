import { Tab } from '../12/data';
import './history.css';

interface HistoryProps {
    tabs: Tab[];}

function History({tabs}: HistoryProps) {
    
    console.log(tabs);
    return<>
        {tabs.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((tab: Tab, index: number) => (<li className='tabs-anime-li' key={index}>
            <p>{tab.anime.title}</p>
            <p>{tab.date.toString()}</p>
            <p>{tab.type}</p>
        </li>))}
    </>
};

export default History;