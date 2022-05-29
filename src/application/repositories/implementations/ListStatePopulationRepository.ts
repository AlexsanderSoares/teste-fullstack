import { State } from "../../../domain/entities/State";
import { IListStatePopulationRepository } from "../IListStatePopulationRepository";
import states from './data/unidades-federativas.json';

class ListStatePopulationRepository implements IListStatePopulationRepository{
    async listStates(): Promise<State[]> {
        return states.unidades_federativas.map(state => {
            return {name: state.unidade_federativa, uf: state.abreviacao, population: state.populacao_estimada.toString()}
        });

    }
}

export {ListStatePopulationRepository};