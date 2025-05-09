import { Tab } from '../12/data';
import './history.css';
import { format } from 'date-fns';
import {enUS} from 'date-fns/locale';

interface HistoryProps {
    tabs: Tab[];}

function History({tabs}: HistoryProps) {
    
    return<>
        {tabs.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((tab: Tab, index: number) => (<li className='tabs-anime-li' key={index}>
            <p className='history-title'>{tab.anime.title}</p>
            {/* <p>{tab.date.toString()}</p> */}
            {format(tab.date, "d MMMM yyyy", {locale: enUS})}
            <p className='history-tab-type'>{tab.type}</p>
        </li>))}
    </>
};

export default History;