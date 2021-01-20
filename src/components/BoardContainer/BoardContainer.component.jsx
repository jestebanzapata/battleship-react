import React from 'react'
import Board from '../Board/Board.component';
import ships from '../../assets/static/ship';
import ShipContainer from '../ShipContainer/ShipContainer.component';

// REDUX
import { connect } from 'react-redux';
import { setBoardInitialState, setShipDragged } from '../../redux/actions';
import { StyledBoardContainer } from './BoardContainer.style';
import { EMPTY_BOARD } from '../../constants/types';


function Boardcontainer(props) {
  const { loggedUser, gameState, setShipDragged, setBoardInitialState} = props;
  const {config} = gameState;
  const { width } = config;

  const onShipDragStart = (e, ship) => {
    console.log("onShipDragStart => ", ship);
    setShipDragged(ship);
  }

  const generateAutoBoardHandler = (user) => {
    const boardState = ships.reduce((accum, currentValue) => {
      let shipRandomPositionGenerated = false;
      while (!shipRandomPositionGenerated) {
        const randomPosition = Math.floor(Math.random() * width * width);
        const randomDirection = Math.floor(Math.random() * 2);
        const shipToPosition = { ship: currentValue, lastSelectedShipIndex: 0, direction: randomDirection };
        shipRandomPositionGenerated = addShipToBoardPositionHandler(accum, shipToPosition, { targetBoardIndex: randomPosition })
      }

      return accum.map((cell, index) => {
        const cellModified = shipRandomPositionGenerated.find(data => data.boardIndex === index);
        return cellModified ? { ship: { ...cellModified.ship } } : cell;
      });


    }, EMPTY_BOARD);
    setBoardInitialState({ user, boardState});
  }

  const addShipToBoardPositionHandler = (board, shipToPosition, positionData) => {
    const { targetBoardIndex } = positionData;
    const { ship, lastSelectedShipIndex, direction } = shipToPosition;

    const shipLength = ship.length;
    //Horizontal
    const boardIndexes = Array.from(Array(shipLength).keys()).map(index => (targetBoardIndex - ((direction === 0 ? 1 : width) * lastSelectedShipIndex)) + (direction === 0 ? index : index * 10));

    const boardIndexesOverflow = boardIndexes.find(boardIndex => boardIndex > ((width * width) - 1) || boardIndex < 0);

    if (boardIndexesOverflow) {
      return;
    }

    const isCellAlreadyTaken = boardIndexes.find(boardIndex => {
      return board[boardIndex].ship != null;
    });

    if (isCellAlreadyTaken) {
      return;
    }

    const rowsToModified = boardIndexes.map(boardIndex => Math.floor(boardIndex / width));
    const amountRows = new Set(rowsToModified);
    if (((direction === 0 && amountRows.size === 1) || (direction === 1 && amountRows.size === shipLength)) && !isCellAlreadyTaken) {
      const shipPosition = boardIndexes.map(index => ({
        ship: { type: ship.type, shipIndex: boardIndexes.findIndex(boardIndex => boardIndex === index), direction: 0 }, boardIndex: index
      }));

      return shipPosition
    }
    return null;
  }

  return (
    <>
      <StyledBoardContainer>
        {
          Object.entries(gameState.board).map(([user, board]) =>
            <Board key={user} user={user} board={board} {...{ generateAutoBoardHandler, addShipToBoardPositionHandler}}></Board>
          )
        }

        {/* <Board type="ENEMY" board={gameState.enemyBoard}></Board> */}
      </StyledBoardContainer>
      <ShipContainer onShipDragStart={onShipDragStart}></ShipContainer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    loggedUser: state.loggedUser
  }
};

const mapDispatchToProps = {
  setShipDragged,
  setBoardInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(Boardcontainer);
