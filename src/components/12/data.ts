export type SetValue<V> = (newValue: V | ((newValue: V) => V)) => void; 

export interface Anime{
  title: string;
  url: string;
  content: string;
  img: string;
  id: number
}

export interface Recommendation {
    anime1: Anime;
    anime2: Anime;
    content: string;
}

export function mapToAnime (item: any, _: number): Anime {
    return {
        title: (item.title_english) ? item.title_english : item.title,
        url: item.url,
        content: item.content,
        img: item.images.jpg.large_image_url,
        id: item.mal_id
    };
}

export function mapToRecommendation(item: any, index: number): Recommendation {
    return {
        anime1: mapToAnime(item.entry[0], index),
        anime2: mapToAnime(item.entry[1], index),
        content: item.content
    }
}

export interface Genre{
    ID: number;
    name: string;
}

export function mapToGenre(item: any, _: number): Genre {
    return {
        ID: item.mal_id,
        name: item.name
    }
}

export enum TabType {
    InTheProcessOf = "In the proccess of",
    Revisiting = "Revisiting",
    InThePlans = "In the plans",
    Postponed = "Postponed",
    Finished = "Finished",
    Favourite = "Favourite",
    Abandoned = "Abandoned",
    Custom = "Custom"
}

export interface Tab {
    type: TabType,
    anime: Anime,
    date: Date
}