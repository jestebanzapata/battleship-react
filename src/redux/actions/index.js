import { SET_BOARD_INITIAL_STATE, SET_SHIP_DRAGGED, SET_SHIP_POSITION } from './types';

export const setBoardInitialState = payload => ({
    type: SET_BOARD_INITIAL_STATE,
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