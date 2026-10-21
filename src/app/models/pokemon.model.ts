import { IStats } from "./stats.model";

export interface IPokemon {
    id:number;
    name:string;
    base_experience:number;
    is_default:boolean;
    order:number;
    weight:number;
    abilities:string[];
    sprite:string;
    type1:string;
    // ?: Indica que es opcional (Puede no existir)
    type2?:string;
    hidenAbility?: string;
    // stats: {
    //     base_stat:number
    //     name:string

    // }
    stats:IStats[]
}
