
import { serviceFilterEpisodes } from '../services/filter-episode-service';
import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodies } from '../services/list-episode-podcast';
import { StatusCode } from '../utils/status.code';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../model/filter-podcast-model';

export const getListEpisodies =
 async (
   request: IncomingMessage, 
   response: ServerResponse) => {

    const Content = await serviceListEpisodies();
    response.writeHead (StatusCode.OK, {'Content-Type': ContentType.JSON});
    response.end (JSON.stringify(Content));
   
};

export const getFilterEpisodies = async (
   request: IncomingMessage, 
   response: ServerResponse) => {

      const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);
      response.writeHead(content.statusCode ,{'Content-Type': ContentType.JSON});
      response.end(JSON.stringify(content.body));

};

