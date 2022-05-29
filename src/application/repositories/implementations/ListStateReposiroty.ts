import { State } from "../../../domain/entities/State";
import { IListStateRepository } from "../IListStateRepository";
import states from './data/unidades-federativas.json';

class ListStateRepository implements IListStateRepository{
    async listStates(): Promise<State[]> {
        return states.unidades_federativas.map(state => {
            return {name: state.unidade_federativa, uf: state.abreviacao}
        });

    }
}

export {ListStateRepository};