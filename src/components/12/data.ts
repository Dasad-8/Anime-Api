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
// eslint-disable-next-line
export function mapToAnime (item: any): Anime {
    return {
        title: (item.title_english) ? item.title_english : item.title,
        url: item.url,
        content: item.content,
        img: item.images.jpg.large_image_url,
        id: item.mal_id
    };
}

// eslint-disable-next-line
export function mapToRecommendation(item: any): Recommendation {
    return {
        anime1: mapToAnime(item.entry[0]),
        anime2: mapToAnime(item.entry[1]),
        content: item.content
    }
}

export interface Genre{
    ID: number;
    name: string;
}

/* interface GenreResponse {
    mal_id: number;
    name: string;
} */

/* export function mapToGenre(item: GenreResponse): Genre {
    return {
        ID: item.mal_id,
        name: item.name
    }
} */

// eslint-disable-next-line
export function mapToGenre(item: any): Genre {
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
    date: Date,
    UUId: string,
    
}

export interface Update {
    anime: string;
    title: string;
    aired: Date;
    score: number;
}

export interface News{
    title: string;
    date: Date;
    author_username: string;
    excerpt: string;
    forum_url: string;
    mal_id: number;
    images: {
        jpg: {
            image_url: string;
        }
    }
}