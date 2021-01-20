import styled from 'styled-components';
import Ships from '../../assets/static/ship';

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
    ${(props) => props.ship && `background-color: ${Ships.find(ship => ship.type === props.ship.type).color}`}
`;