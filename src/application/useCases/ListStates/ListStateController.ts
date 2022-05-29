import { ListStateUseCase } from "./ListStateUseCase";

class ListStateController{
    constructor(
        private listStateUseCase: ListStateUseCase
    ){}

    async handler(){
        const listStates = await this.listStateUseCase.excecute();

        return listStates;
    }
}

export {ListStateController};