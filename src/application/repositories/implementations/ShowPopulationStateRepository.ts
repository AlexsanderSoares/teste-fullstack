import { State } from "../../../domain/entities/State";
import { IShowPopulationStateRepository } from "../IShowPopulationStateRepository";
import states from './data/unidades-federativas.json';

export class ShowPopulationStateRepository implements IShowPopulationStateRepository{
    async showPopulationState(uf: string): Promise<State> {
        const state = states.unidades_federativas.find(state => {
            return state.abreviacao.toLocaleLowerCase() === uf.toLocaleLowerCase();
        });

        return {uf: state.abreviacao, population: state.populacao_estimada.toString()};
    }
}