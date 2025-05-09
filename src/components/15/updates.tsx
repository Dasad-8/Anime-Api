import { useCallback, useEffect, useState } from 'react';
import './updates.css'
import { Tab, Update } from '../12/data';
/* import { Link } from 'react-router-dom'; */
import { format } from 'date-fns';
import {enUS} from 'date-fns/locale';


interface UpdatesProps {
    tabs: Tab[]
}



function Updates({tabs}: UpdatesProps) {

    const [updatesList, setUpdatesList] = useState<Update[]>([]);
    
    

    const getResponse = useCallback (async ()=> {
        let allUpdates: Update[] = [];
        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            const animeID = tab.anime.id;
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}/episodes`);
            const content = await response.json();
            for (let j = 0; j < content.data.length; j++) {
                const element = content.data[j];
                element.anime  = tab.anime.title;
            }
            allUpdates = [...allUpdates, ...content.data];
        }

        setUpdatesList(allUpdates);
    }, [tabs]);

    useEffect(() => {
        getResponse();
    }, [getResponse]);




    return <>
        <ol>
            {updatesList.toSorted((a, b) => new Date(b.aired).getTime() - new Date(a.aired).getTime()).map((update: Update, index: number) => (<><li className='updates-anime-li' key={index}>
                <h2>{update.anime}</h2>
                <p>{update.title}</p>
                <p>{format(update.aired, "d MMMM yyyy", {locale: enUS})}</p>
                <p>{update.score}</p>
            </li></>))}
        </ol>
    </>
}

export default Updates;