import { PlayerModel } from "../models/player-models";
import { statisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/player-repositorie";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPLayers();
    let response = null;

    if(data) {
    response = await HttpResponse.ok(data);
    }else {
    response = await HttpResponse.noContent(data); 

    }    
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    if(data) {
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.noContent(data);
    }
    
    return response;
};

export const createPlayerService = async (player:PlayerModel) => {
    let response = null;
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        response = await HttpResponse.created();
    }else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deletePlayerById(id);

    response = await HttpResponse.ok({message: `Player with id ${id} deleted successfully`});
        return response;
};

export const patchPlayerService = async (id: number, statistics: statisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayerStatistics(id, statistics);
    const response = await HttpResponse.ok(data);
    return response;
};

// aqui é onde a lógica de negócio deve ser implementada, ou seja, a parte que faz sentido para o sistema
// o serviço não deve ter conhecimento de requisição e resposta, isso é papel do controller