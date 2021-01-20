import styled from 'styled-components';

const CELL_SIZE = 6;

export const StyledShip = styled.div`
    display: flex;

    ${(props) => props.direction === 1 && `flex-direction: column`}
`;

export const StyledShipPiece = styled.div`
    border: 1px solid black;
    width: ${CELL_SIZE}vmin;
    height: ${CELL_SIZE}vmin;
    cursor: move;
    background-color: ${(props) => props.color ? props.color : 'black'};
`;