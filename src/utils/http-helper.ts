import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200, 
        body: data,

    };
};

export const noContent = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 204, 
        body: data,

    };
};

export const badRequest = async(): Promise<HttpResponse> => {
    return {
        statusCode: 400, 
        body: { message: "Bad Request"},

    };
};

export const created = async(): Promise<HttpResponse> => {
    return {
        statusCode: 201, 
        body:{ message: "AMAZING! Created successfully",
        },
    };
}

// o objetivo desse helper é padronizar as respostas HTTP, para que todos os serviços retornem respostas no mesmo formato
// sempre que se usa async, tem que ter uma promise, porque o async retorna uma promise