export type SetValue<V> = (newValue: V | ((newValue: V) => V)) => void; 

export interface Anime{
  title: string;
  url: string;
  content: string;
  img: string
}

export interface Recommendation {
    anime1: Anime;
    anime2: Anime;
    content: string;
}

export function mapToAnime (item: any, _: number): Anime {
    return {
        title: (item.title_english === null) ? item.title : item.title_english,
        url: item.url,
        content: item.content,
        img: item.images.jpg.large_image_url
    };
}

export function mapToRecommendation(item: any, index: number): Recommendation {
    return {
        anime1: mapToAnime(item.entry[0], index),
        anime2: mapToAnime(item.entry[1], index),
        content: item.content
    }
}