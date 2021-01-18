import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Board from './components/Board'; 
import PapperEffect from './components/PaperEffect';
import ShipContainer from './components/ShipContainer';
import Ships from './assets/static/ship';
import { connect } from 'react-redux';
import { setShipDragged } from './redux/actions';


const StyledBoardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 10px;
`;

const StyledBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
  display: grid;
`;

function App({gameState, setShipDragged}) {

  const onShipDragStart = (e, ship) => {
    console.log("onShipDragStart => ", ship);
    setShipDragged(ship);
  }

  return (
    <div className="App">
      <StyledBoardContainer>
        <Board type="PLAYER" board={gameState.playerBoard}></Board>
        <Board type="ENEMY" board={gameState.enemyBoard}></Board>
      </StyledBoardContainer>
      <ShipContainer shipArray={Ships} onShipDragStart={onShipDragStart}></ShipContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState
  }
};

const mapDispatchToProps = {
  setShipDragged
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
