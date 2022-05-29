import { State } from "../../domain/entities/State";

export interface IShowPopulationStateRepository{
    showPopulationState(uf: string): Promise<State>;
}