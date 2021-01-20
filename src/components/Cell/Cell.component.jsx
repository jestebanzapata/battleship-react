import React from 'react';

import { StyledCell } from './Cell.style';

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