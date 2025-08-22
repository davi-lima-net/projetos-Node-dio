import { repositoriesPodcast } from "../repositories/podcast-repositorie";
import { FilterPodcastModel } from "../model/filter-podcast-model";
import { StatusCode } from "../utils/status.code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
):Promise<FilterPodcastModel>=>{

let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: []

};
    const queryString = podcastName?.split('p=')[1] || "";
    const data = await repositoriesPodcast(queryString);

    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;

    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;



    return responseFormat;

};

