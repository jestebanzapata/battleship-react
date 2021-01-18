const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_GAME_STATE':
            return {
                ...state,
                gameState: [...action.payload]
            };
        case 'SET_SHIP_DRAGGED':
            console.log("action SET_SHIP_DRAGGED => ", action);
            return {
                ...state,
                shipDragged: {...action.payload}
            };
        case 'SET_SHIP_POSITION':                   
            const shipPosition  = action.payload;
            const newState = {
                ...state,
                gameState: state.gameState.map((cell, index) => {
                    const cellModified = shipPosition.find(data => data.boardIndex == index);
                    return  cellModified ? { ship: {...cellModified.ship}}: cell;
                })
            };
            console.log("NewState ==> ", newState);
            return newState;
        default:
            break;
    }

    return state;
}

export default reducer;