import {ShowPopulationStateRepository} from '../../repositories/implementations/ShowPopulationStateRepository'
import {ShowPopulationStateUseCase} from '../ShowPopulationState/ShowPopulationStateUseCase';
import {ShowPopulationStateController} from '../ShowPopulationState/ShowPopulationStateController';

const showpopulationStateRepository = new ShowPopulationStateRepository(); 

const showPopulationStateUseCase = new ShowPopulationStateUseCase(showpopulationStateRepository);

const showPopulationStateController = new ShowPopulationStateController(showPopulationStateUseCase);

export {showPopulationStateUseCase, showPopulationStateController};