import { ShowPopulationStateUseCase } from "./ShowPopulationStateUseCase";


class ShowPopulationStateController{
    constructor(
        private showPopulationStateUseCase: ShowPopulationStateUseCase
    ){}

    async handler(uf){
        const showPopulationState = await this.showPopulationStateUseCase.excecute(uf);

        return showPopulationState;
    }
}

export {ShowPopulationStateController};