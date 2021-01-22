import styled from 'styled-components';
import Ships from '../../assets/static/ship';

import { animated } from 'react-spring'

const defaultShip = { type: 'Unknown', color: 'gray'}

export const StyledCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    border: 2px solid #bbd1d4;
    border-style:dashed;
    font-weight: bold;
    font-size: 2rem;
    color: #ff9f9f;

    ${(props) => props.ship && `background-color: ${(Ships.find(ship => ship.type === props.ship.type) || defaultShip).color}`};

    &:not(.busy):hover{
        transform: scale(1.2);
        background-color: #d3ebff;
    }

    & .ripple{
        border-radius: 50%;
        width: 2vmin;
        height: 2vmin;
        background-color: #9cd1f5;
        border: 3px solid #08d1d8;
        /* border-style: dashed; */
        /* z-index: -2; */
    }

/* box-shadow: 0 0 0 0rem rgba(255,0, 0, 0.2),
 0 0 0 1rem rgba(255,0, 0, 0.2),
 0 0 0 2rem rgba(255,0, 0, 0.2),
 0 0 0 5rem rgba(255,0, 0, 0.2); */
`;