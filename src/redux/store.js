import reducer from './reducers';
import {createStore} from 'redux';

const initialState = {
    gameConfig: {
      width: 10
    },
    gameState:{
      status: '',
      turn: '',    
      playerBoard: [
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{}
      ],
      enemyBoard: [
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{}
      ]
    }
  };

export default createStore(reducer, initialState);