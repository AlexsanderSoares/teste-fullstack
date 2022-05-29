import {IShowPopulationStateRepository} from '../../repositories/IShowPopulationStateRepository';

class ShowPopulationStateUseCase{
    constructor(
        private showPopulationStateRepository: IShowPopulationStateRepository
    ){}

    async excecute(uf){
        const showPopulationState = await this.showPopulationStateRepository.showPopulationState(uf);

        return showPopulationState;
    }
}

export {ShowPopulationStateUseCase};