import React, { useState } from 'react';
import { StyledShip, StyledShipPiece } from './Ship.styles';

function Ship(props) {
    const {id, direction, shipData, onDragStart} = props;
    const { type, length, sprites, color} = shipData;
    const [lastSelectedShipIndex, setLastSelectedShipIndex] = useState(-1);
    return (
        <StyledShip draggable direction={direction} onDragStart={(e) => onDragStart(e, {ship: shipData, lastSelectedShipIndex, direction})}>
            {
                Array.from(Array(length).keys()).map(index => {
                    return <StyledShipPiece key={`${type}${id}${index}`} color={color} onMouseDown={()=> setLastSelectedShipIndex(index)}/>
                })
            }
        </StyledShip>
    );
}

export default Ship;