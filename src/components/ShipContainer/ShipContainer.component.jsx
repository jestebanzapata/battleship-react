import React, { useState } from 'react';
import Ship from '../Ship/Ship.component';
import ships from '../../assets/static/ship';
import { StyledShipContainer } from './ShipContainer.style';



function ShipContainer(props) {
    const { onShipDragStart} = props;

    const [direction, setDirection] = useState(0);

    return (
        <StyledShipContainer>
            {
                ships.map((ship, index) => (
                    <Ship key={`${ship.type}${index}`} id={index} direction={direction} shipData={ship} onDragStart={onShipDragStart}></Ship>
                ))
            }
            <button onClick={() => setDirection(previousDirection => previousDirection === 0 ? 1: 0)}>Rotate Ship</button>
        </StyledShipContainer>
    );
}

export default ShipContainer;