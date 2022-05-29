import {ListStatePopulationRepository} from '../../repositories/implementations/ListStatePopulationRepository';
import { ListStatePopulationController } from './ListStatePopulationController';
import { ListStatePopulationUseCase } from './ListStatePopulationUseCase';


const listStatePopulationRepository = new ListStatePopulationRepository();

const listStatePopulationUseCase = new ListStatePopulationUseCase(listStatePopulationRepository);

const listStatePopulationController = new ListStatePopulationController(listStatePopulationUseCase);

export {listStatePopulationController, listStatePopulationUseCase};