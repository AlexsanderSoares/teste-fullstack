import {ListStateRepository} from '../../repositories/implementations/ListStateReposiroty';
import {ListStateUseCase} from '../../useCases/ListStates/ListStateUseCase';
import {ListStateController} from '../../useCases/ListStates/ListStateController';

const listStateReposiroty = new ListStateRepository();
 
const listStateUseCase = new ListStateUseCase(listStateReposiroty);

const listStateController = new ListStateController(listStateUseCase);

export {listStateUseCase, listStateController};

