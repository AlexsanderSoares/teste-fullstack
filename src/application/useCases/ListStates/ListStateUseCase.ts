import { IListStateRepository } from "../../repositories/IListStateRepository";

class ListStateUseCase{
    constructor(
        private listStatesRepository: IListStateRepository
    ){}

    async excecute(){
        const listStates = await this.listStatesRepository.listStates();

        return listStates;
    }
}

export {ListStateUseCase};