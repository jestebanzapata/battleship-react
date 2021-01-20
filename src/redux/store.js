import reducer from './reducers';
import {createStore} from 'redux';
import { EMPTY_BOARD, gameStatus, modes } from '../constants/types';

const initialState = {
    loggedUser: {
      username: 'player1'
    },
    shipDragged: null,
    gameState:{
      config: {
        width: 10
      },
      status: gameStatus.SETTING,
      mode: modes.SINGLE,
      currentTurn: '',
      destroyedShips: {
        player1: [],
        machine: []
      },
      board: {
        player1: EMPTY_BOARD,
        machine: EMPTY_BOARD
      }
    }
  };

export default createStore(reducer, initialState);