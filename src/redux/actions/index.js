import { SET_GAME_STATE, SET_SHIP_DRAGGED, SET_SHIP_POSITION } from './types';

export const setGameState = payload => ({
    type: SET_GAME_STATE,
    payload
});

export const setShipPosition = payload => ({
    type: SET_SHIP_POSITION,
    payload
});

export const setShipDragged = payload => ({
    type: SET_SHIP_DRAGGED,
    payload
});