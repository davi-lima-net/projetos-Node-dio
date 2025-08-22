import * as http from 'http';
import { getListEpisodies, getFilterEpisodies } from './controllers/podcast.controller';
import { Routes } from './rutes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = 
 async (request: http.IncomingMessage,
     response: http.ServerResponse) =>{
    const [baseURL, queryString] = request.url?.split('?') ?? ["", ""];
      
   
   if (request.method === HttpMethod.GET && baseURL === Routes.LIST) {
    await getListEpisodies(request, response);
   }
   if (request.method === HttpMethod.GET && baseURL === Routes.EPISODE) { 
      await getFilterEpisodies(request, response);
      
      }
   }