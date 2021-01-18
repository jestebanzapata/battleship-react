import React, { useState } from 'react';
import styled from 'styled-components';
import Ship from './Ship';

const StyledShipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`;

function ShipContainer(props) {
    const {shipArray, onShipDragStart} = props;

    const [direction, setDirection] = useState(0);

    return (
        <StyledShipContainer>
            {
                shipArray.map(ship => (
                    <Ship direction={direction} shipData={ship} onDragStart={onShipDragStart}></Ship>
                ))
            }
            <button onClick={() => setDirection(previousDirection => previousDirection == 0 ? 1: 0)}>Rotate Ship</button>        
        </StyledShipContainer>
    );
}

export default ShipContainer;