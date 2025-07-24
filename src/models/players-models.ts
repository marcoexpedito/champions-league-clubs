export interface playerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
        overall: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physical: number;
    }
};

export interface httpResponse  {
    statusCode: number;
    body: any;
}


