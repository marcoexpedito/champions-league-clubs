import { playerModel } from "../models/players-models";
import { statisticsModel } from "../models/statistics-model";

const dataBase : playerModel[] = [
    {
        id: 1, name: "Messi",
        club: "",
        nationality: "",
        position: "",
        statistics: {
            overall: 0,
            pace: 0,
            shooting: 0,
            passing: 0,
            dribbling: 0,
            defending: 0,
            physical: 0
        }
    },
    {
        id: 2, name: "Ronaldo",
        club: "",
        nationality: "",
        position: "",
        statistics: {
            overall: 0,
            pace: 0,
            shooting: 0,
            passing: 0,
            dribbling: 0,
            defending: 0,
            physical: 0
        }
    },
];


export const findAllPlayers = async (): Promise<playerModel[]> => {
    return dataBase;
};

export const findPlayerById = async (id: number) : Promise<playerModel | undefined> => {
    return dataBase.find( player => player.id === id);
};


export const insertPlayer = async (player: playerModel) => {
    dataBase.push(player);
};


export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex(p => p.id === id);

    if (index !== -1) {
        dataBase.splice(index, 1);
        return true;
    } 

    return false;
};


export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<playerModel> => {
    const playerIndex = dataBase.findIndex(player => player.id === id);
    
    if(playerIndex !== -1) {
        dataBase[playerIndex].statistics = statistics;
    };

    return dataBase[playerIndex];
}