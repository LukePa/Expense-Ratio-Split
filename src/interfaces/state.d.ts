
export interface IState {
    lukeWage: number;
    daliWage: number;
    
    rent: number;
    utility: number;
    wifi: number;
    water: number;
    food: number;
    
    nonEssentialSubscriptions: ISubscription[];
}

export interface ISubscription {
    title: string;
    cost: number;
} 