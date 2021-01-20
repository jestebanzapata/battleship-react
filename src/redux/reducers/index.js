import { SET_BOARD_INITIAL_STATE, SET_SHIP_DRAGGED, SET_SHIP_POSITION, SHOOT_CELL } from "../actions/types";

const reducer = (state, action) => {
    //[...action.payload]
    switch (action.type) {
        case SET_BOARD_INITIAL_STATE: {
            const { user, boardState } = action.payload;
            return {
                ...state,
                gameState: { ...state.gameState, board: { ...state.gameState.board, [user]: boardState } }
            };
        }
        case SET_SHIP_DRAGGED:
            return {
                ...state,
                shipDragged: {...action.payload}
            };
        case SET_SHIP_POSITION: {
            const { user, shipPosition } = action.payload;
            const newState = {
                ...state,
                gameState: {
                    ...state.gameState,
                    board: {
                        ...state.gameState.board,
                        [user]: state.gameState.board[user].map((cell, index) => {
                            const cellModified = shipPosition.find(data => data.boardIndex === index);
                            return cellModified ? { ship: { ...cellModified.ship } } : cell;
                        })
                    }
                },
            };
            return newState;
        }
        case SHOOT_CELL: {
            const { user, index: boardIndex } = action.payload;
            const newState = {
                ...state,
                gameState: {
                    ...state.gameState,
                    board: {
                        ...state.gameState.board,
                        [user]: state.gameState.board[user].map((cell, index) => {

                            return boardIndex === index ? { ...cell, wasHit: true } : cell;
                        })
                    }
                },
            };
            return newState;
        }
        default:
            break;
    }

    return state;
}

export default reducer;