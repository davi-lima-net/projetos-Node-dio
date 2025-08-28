import { PlayerModel } from "../models/player-models";
import { statisticsModel } from "../models/statistics-model";

const database: PlayerModel [] = [
    {id: 1, 
    name: "Coby Bryant",
    club: "Lakers",
    nationality: "USA",
    position: "SG",
    statistics: {
        pointsPerGame: 30.1,
        assistsPerGame: 6.2,
        reboundsPerGame: 5.4,
        stealsPerGame: 1.4,
        blocksPerGame: 0.5
    }


},
    {id: 2, 
    name: "Lebron James",
    club: "Lakers",
    nationality: "USA",
    position: "SF",
    statistics: {
        pointsPerGame: 25.3,
        assistsPerGame: 7.8,
        reboundsPerGame: 7.5,
        stealsPerGame: 1.2,
        blocksPerGame: 0.6
    }      
},
    {id: 3, 
    name: "Kevin Durant",
    club: "Nets",
    nationality: "USA",
    position: "SF",
    statistics: {
        pointsPerGame: 27.1,
        assistsPerGame: 5.6,
        reboundsPerGame: 7.1,
        stealsPerGame: 0.7,
        blocksPerGame: 1.1
    }

},
];

export const findAllPLayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<void> => {
    database.push(player);
}   

export const deletePlayerById = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);

    if(index !== -1) {
        database.splice(index, 1);
    }
};

export const findAndModifyPlayerStatistics = async (
    id: number, 
    statistics: statisticsModel
): Promise<PlayerModel> =>  {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex];
};


// o findplayerById retorna um player ou null, caso não encontre o player com o id fornecido
// ele chamou o database e fez um find para encontrar o player com o id fornecido
// findAllPlayers retorna uma lista de players
