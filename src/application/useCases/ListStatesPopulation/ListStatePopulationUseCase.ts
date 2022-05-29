import { IListStatePopulationRepository } from "../../repositories/IListStatePopulationRepository";


class ListStatePopulationUseCase{
    constructor(
        private listStatesPopulationRepository: IListStatePopulationRepository
    ){}

    async excecute(){
        const listStates = await this.listStatesPopulationRepository.listStates();

        return listStates;
    }
}

export {ListStatePopulationUseCase};