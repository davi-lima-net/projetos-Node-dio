import { Request,Response } from "express";    
import * as service from "../services/player-service";
import { statisticsModel } from "../models/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {

const HttpResponse = await service.getPlayerService(); 
    res.status(HttpResponse.statusCode).json( HttpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id); 
    const HttpResponse = await service.getPlayerByIdService(id);
    res.status(HttpResponse.statusCode).json( HttpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const HttpResponse = await service.createPlayerService(bodyValue);

    if(HttpResponse){
    res.status(HttpResponse.statusCode).json( HttpResponse.body);
    
    }
};

// lógica para deletar o jogador com o id fornecido
export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await service.deletePlayerService(id);
    res.status(HttpResponse.statusCode).json( HttpResponse.body);

};

export const patchPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: statisticsModel = req.body;
};













// o async é usado especificamente quando se tem uma promise, ou seja, uma função que demora um tempo para retornar um valor
// o controller é responsável por lidar com a requisição e a resposta, ele chama o serviço para obter os dados necessários