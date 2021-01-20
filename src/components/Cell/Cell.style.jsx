import styled from 'styled-components';
import Ships from '../../assets/static/ship';

import { animated } from 'react-spring'

const defaultShip = { type: 'Unknown', color: 'gray'}

export const StyledCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #C1E8EE;
    font-weight: bold;
    font-size: 2rem;
    color: #ff9f9f;
    /* min-width: auto;
    min-height: auto; */
    background-color: #eeeeee;

    ${(props) => props.ship && `background-color: ${(Ships.find(ship => ship.type === props.ship.type) || defaultShip).color}`};

    &:not(.busy):hover{
        transform: scale(1.2);
    }

    & .ripple{
        border-radius: 50%;
        width: 3vmin;
        height: 3vmin;
        background-color: gray;
        z-index: 2;
    }

/* box-shadow: 0 0 0 0rem rgba(255,0, 0, 0.2),
 0 0 0 1rem rgba(255,0, 0, 0.2),
 0 0 0 2rem rgba(255,0, 0, 0.2),
 0 0 0 5rem rgba(255,0, 0, 0.2); */
`;