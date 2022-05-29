import { State } from "../../domain/entities/State";

export interface IListStatePopulationRepository{
    listStates(): Promise<State[]>;
}