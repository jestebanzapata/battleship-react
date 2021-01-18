import React, { useState } from 'react';
import styled from 'styled-components';

const StyledShip = styled.div`
    display: flex;

    ${(props) => props.direction == 1 && `flex-direction: column`}    
`;

const StyledShipPiece = styled.div`
    border: 1px solid black;
    width: 4.6vmin;
    height: 4.6vmin;    
    cursor: move;
    background-color: ${(props) => props.color ? props.color: 'black'};
`;

function Ship(props) {
    const {direction, shipData, onDragStart} = props;
    const { type, length, sprites, color} = shipData;
    const [lastSelectedShipIndex, setLastSelectedShipIndex] = useState(-1);
    return (
        <StyledShip draggable direction={direction} onDragStart={(e) => onDragStart(e, {ship: shipData, lastSelectedShipIndex, direction})}>
            {
                Array.from(Array(length).keys()).map(index => {
                    return <StyledShipPiece color={color} onMouseDown={()=> setLastSelectedShipIndex(index)}/>
                })
            }
        </StyledShip>
    );
}

export default Ship;