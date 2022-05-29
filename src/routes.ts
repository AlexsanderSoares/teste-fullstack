import express from "express";
import { listStateController } from "./application/useCases/ListStates";
import { showPopulationStateController } from "./application/useCases/ShowPopulationState";
import { listStatePopulationController } from './application/useCases/ListStatesPopulation';

const router = express.Router();

router.get('/estados', async (req, res) => {
    const listStates = await listStateController.handler();

    res.json(listStates);
});

router.get('/estados/populacao/:uf', async (req, res) => {
    const showPopulationState = await showPopulationStateController.handler(req.params.uf);

    res.json(showPopulationState);
});

router.get('/estados/populacao', async (req, res) => {
    const listStates = await listStatePopulationController.handler();

    res.json(listStates);
});

export {router};