import { State } from "../../domain/entities/State";

export interface IListStateRepository{
    listStates(): Promise<State[]>;
}