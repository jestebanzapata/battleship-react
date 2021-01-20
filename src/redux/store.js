import reducer from './reducers';
import {createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { EMPTY_BOARD, DEFAULT_BOARD_MACHINE, DEFAULT_BOARD_PLAYER, gameStatus, modes } from '../constants/types';

const initialState = {
    loggedUser: {
      username: 'player1'
    },
    shipDragged: null,
    gameState:{
      config: {
        width: 10
      },
      status: gameStatus.PLAYING,
      mode: modes.SINGLE,
      currentTurn: 'player1',
      destroyedShips: {
        player1: [],
        machine: []
      },
      board: {
        player1: DEFAULT_BOARD_PLAYER,
        machine: DEFAULT_BOARD_MACHINE
      }
    }
  };

export default createStore(reducer, initialState, composeWithDevTools());