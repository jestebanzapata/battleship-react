import React from 'react';
import styled from 'styled-components';
import Ships from '../assets/static/ship';

const StyledCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #C1E8EE;
    font-weight: bold;
    font-size: 2rem;
    color: #ff9f9f;

    ${(props) => props.ship && `background-color: ${Ships.find(ship => ship.type == props.ship.type).color}`}
`;

function Cell(props) {
    const {index, wasHit=false, ship, onDragOver, onDrop} = props;
    const { type, shipIndex, direction } = ship || {};

    return (
        <StyledCell {...props} onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, {targetBoardIndex: index})}>
            {
                wasHit && 'X'
            }
        </StyledCell>
    );
}

export default Cell;