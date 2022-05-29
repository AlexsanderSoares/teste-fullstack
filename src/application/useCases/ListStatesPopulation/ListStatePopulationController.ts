import { ListStatePopulationUseCase } from "./ListStatePopulationUseCase";

class ListStatePopulationController{
    constructor(
        private listStatePopulationUseCase: ListStatePopulationUseCase
    ){}

    async handler(){
        const listStates = await this.listStatePopulationUseCase.excecute();

        return listStates;
    }
}

export {ListStatePopulationController};