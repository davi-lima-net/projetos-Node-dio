import { podcastModel } from "./podcast.model";

export interface FilterPodcastModel {
    statusCode: number;
    body: podcastModel[];
}

// vai servir para filtrar os episódios de um podcast, com base no status da resposta e no corpo da resposta