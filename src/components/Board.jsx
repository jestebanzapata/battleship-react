import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cell from './Cell';

import { setGameState, setShipPosition } from '../redux/actions';
import ships from '../assets/static/ship';

const StyledBoard = styled.div`
    display: grid;
    grid-area: board;
    grid-template-rows: repeat(${(props) => props.width}, 4.6vmin);
    grid-template-columns: repeat(${(props) => props.width}, 4.6vmin);
    background-color: #FBFFFF;
    border: 4px solid #5937CF;
`;

const StyledBoardContainer = styled.div`
    display: grid;
    grid-template-areas: ". coordX"
                         "coordY board"
                         "autobutton autobutton";
`;


const StyledCoordXContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.width}, 4.6vmin);
    height: 4.6vmin;
    grid-area: coordX;
    /* border: 4px solid #5937CF; */
    margin: 4px;
    border-bottom: 0px solid;
`;

const StyledCoordYContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${(props) => props.width}, 4.6vmin);
    grid-area: coordY;
    width: 4.6vmin;
    /* border: 4px solid #5937CF; */
    margin: 4px;
    border-right: 0px solid;
`;

const StyledCoordCell = styled.div`
    border: 1px solid #C1E8EE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAutoButton = styled.button`
    grid-area: autobutton;
    margin-top: 10px;
`;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Board(props) {
    const { gameConfig, board, shipDragged, setShipPosition, setGameState} = props;
    const { width } = gameConfig;

    const onDragOver = (event) => {
        event.preventDefault();
        // console.log("onDragOver => ", event);

    }

    const onDrop = (event, positionData) => {
        const shipPosition = addShipToBoardPosition(board, shipDragged, positionData);
        setShipPosition(shipPosition);
    }

    const generateAutoBoard = () => {
        const newGameState = ships.reduce((accum, currentValue) => {
            let shipRandomPositionGenerated = false;
            while (!shipRandomPositionGenerated) {
                const randomPosition = Math.floor(Math.random() * width*width);
                const randomDirection = Math.floor(Math.random() * 2);
                const shipToPosition = { ship: currentValue, lastSelectedShipIndex: 0, direction: randomDirection};
                shipRandomPositionGenerated = addShipToBoardPosition(accum, shipToPosition, {targetBoardIndex: randomPosition})                    
            }
            
            return accum.map((cell, index) => {
                const cellModified = shipRandomPositionGenerated.find(data => data.boardIndex == index);
                return  cellModified ? { ship: {...cellModified.ship}}: cell;
            });


        }, [...board]);
        setGameState(newGameState);
    }


    const addShipToBoardPosition = (board, shipToPosition, positionData) => {

        const {targetBoardIndex} = positionData;
        const { ship, lastSelectedShipIndex, direction} = shipToPosition;

        const shipLength = ship.length;
        //Horizontal
        const boardIndexes = Array.from(Array(shipLength).keys()).map(index => (targetBoardIndex - ((direction == 0 ? 1 : width) *lastSelectedShipIndex))+(direction == 0 ? index: index*10));       

        const boardIndexesOverflow = boardIndexes.find(boardIndex => boardIndex > (width - 1) || boardIndex < 0);
        
        if(boardIndexesOverflow){
            return;
        }    

        const isCellAlreadyTaken = boardIndexes.find(boardIndex => {
            return board[boardIndex].ship != null;
        });

        if(isCellAlreadyTaken){
            return;
        }    

        const rowsToModified = boardIndexes.map(boardIndex => Math.floor(boardIndex/width));
        const amountRows = new Set(rowsToModified);
        if(((direction == 0 && amountRows.size === 1) || (direction == 1 && amountRows.size === shipLength))  && !isCellAlreadyTaken){
            const shipPosition = boardIndexes.map(index => ({
                ship: {type: ship.type, shipIndex: boardIndexes.findIndex(boardIndex => boardIndex == index), direction: 0}, boardIndex: index
            }));

            return shipPosition
        }
        return null;

    }


    return (
        <>
            <StyledBoardContainer>
                <StyledCoordXContainer width={width}>
                    {
                        Array.from(Array(width).keys()).map(index => {
                            //return <Cell key={index}></Cell>;
                        return <StyledCoordCell key={`coord-cell-${index}`}>{index}</StyledCoordCell>
                        })
                    }
                </StyledCoordXContainer>

                <StyledCoordYContainer width={width}>
                    {
                        Array.from(Array(width).keys()).map(index => {
                            //return <Cell key={index}></Cell>;
                        return <StyledCoordCell key={`coord-cell-${index}`}>{alphabet.substr(index, 1)}</StyledCoordCell>
                        })
                    }
                </StyledCoordYContainer>    

                <StyledBoard width={width}>
                    {
                        // Array.from(Array(width*width).keys()).map(index => (<Cell key={index}></Cell>))
                        board.map((data, index) => (<Cell key={`cell-${index}`} {...{...data, index, onDragOver, onDrop}} ></Cell>))
                    }
                </StyledBoard>
                <StyledAutoButton onClick={() => generateAutoBoard()}>AUTO</StyledAutoButton>
            </StyledBoardContainer>            
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        gameConfig: state.gameConfig, 
        shipDragged: state.shipDragged,
    }
  };

const mapDispatchToProps = {
    setShipPosition,
    setGameState
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);