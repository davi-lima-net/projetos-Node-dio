export interface PlayerModel {
    id: number;
    name:string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
        pointsPerGame: number;
        assistsPerGame: number;
        reboundsPerGame: number;
        stealsPerGame: number;
        blocksPerGame: number;
    }
}


// route parameters -> /players/:id  -> req.params.id ele faz a leitura do id que vem na rota
// query parameters -> /players?id=1 -> req.query.id ele faz a leitura do id que vem na query