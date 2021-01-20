import React from 'react';
import { connect } from 'react-redux';
import Cell  from '../Cell/Cell.component';

import { setShipPosition } from '../../redux/actions';
import {
    StyledAutoButton,
    StyledBoard,
    StyledBoardSubContainer,
    StyledCoordCell,
    StyledCoordXContainer,
    StyledCoordYContainer
} from './Board.style';
import { Refresh } from '@styled-icons/heroicons-outline';
import { gameStatus } from '../../constants/types';
import { useCallback } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Board(props) {
    const { user, loggedUser, board, gameState, shipDragged, generateAutoBoardHandler, addShipToBoardPositionHandler, setShipPosition} = props;
    const { config, status } = gameState;
    const { width } = config;

    // const onDragOver = (event) => {
    //     event.preventDefault();
    //     // console.log("onDragOver => ", event);
    // }

    const onDragOver = useCallback(event => event.preventDefault(), []);

    const onDrop = useCallback((event, positionData) => {
        if (status !== gameStatus.SETTING){
            return;
        }
        const shipPosition = addShipToBoardPositionHandler(board, shipDragged, positionData);
        setShipPosition({ user, shipPosition});
    }, [])

    return (
        <>
            <StyledBoardSubContainer>
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
                {
                    status === gameStatus.SETTING && <StyledAutoButton onClick={() => generateAutoBoardHandler(user)}><Refresh /></StyledAutoButton>
                }
            </StyledBoardSubContainer>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        gameState: state.gameState,
        shipDragged: state.shipDragged,
        loggedUser: state.loggedUser
    }
  };

const mapDispatchToProps = {
    setShipPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);