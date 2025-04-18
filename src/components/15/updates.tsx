import { useEffect, useState } from 'react';
import './updates.css'
import { Tab } from '../12/data';
import { Link } from 'react-router-dom';

interface UpdatesProps {
    tabs: Tab[]
}

function Updates({tabs}: UpdatesProps) {

    const [updatesList, setUpdatesList] = useState<any[]>([]);
    
    async function getResponse(): Promise<void> {
        let allUpdates: any[] = [];
        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            const animeID = tab.anime.id;
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}/episodes`);
            let content = await response.json();
            for (let j = 0; j < content.data.length; j++) {
                const element = content.data[j];
                element.anime  = tab.anime.title;
            }
            allUpdates = [...allUpdates, ...content.data];
        }

        setUpdatesList(allUpdates);
    }

    useEffect(() => {
        getResponse();
    }, []);

    console.log(updatesList);

    return <>
        <ol>
            {updatesList.toSorted((a, b) => new Date(b.aired).getTime() - new Date(a.aired).getTime()).map((update: any, index: number) => (<><li key={index}>
                <p>{update.anime}</p>
                <p>{update.title}</p>
                <p>{update.aired}</p>
                <p>{update.score}</p>
            </li></>))}
        </ol>
    </>
}

export default Updates;