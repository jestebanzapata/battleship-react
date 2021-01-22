import styled from 'styled-components';

const CELL_SIZE = 6;

export const StyledBoardSubContainer = styled.div`
    display: grid;
    width: calc((11* ${CELL_SIZE}vmin));
    grid-template-areas: ". coordX"
                         "coordY board"
                         "autobutton autobutton";
`;

export const StyledBoard = styled.div`
    display: grid;
    grid-area: board;
    width: calc((10* ${CELL_SIZE}vmin));
    grid-template-rows: repeat(${(props) => props.width}, ${CELL_SIZE}vmin);
    grid-template-columns: repeat(${(props) => props.width}, ${CELL_SIZE}vmin);
    background-color: #d7f5ff;
    border: 4px solid #5937CF;
    justify-content: center;
`;

export const StyledCoordXContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.width}, ${CELL_SIZE}vmin);
    height: ${CELL_SIZE}vmin;
    grid-area: coordX;
    /* border: 4px solid #5937CF; */
    margin: 4px;
    border-bottom: 0px solid;
`;

export const StyledCoordYContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${(props) => props.width}, ${CELL_SIZE}vmin);
    grid-area: coordY;
    width: ${CELL_SIZE}vmin;
    /* border: 4px solid #5937CF; */
    margin: 4px;
    border-right: 0px solid;
`;

export const StyledCoordCell = styled.div`
    border: 1px solid #C1E8EE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledAutoButton = styled.button`
    grid-area: autobutton;
    margin-top: 10px;
    text-decoration: none;
    border-radius: 10px;
    background-color: #d5e9ff;
    border: none;
    color: #1749a7;
    width: 40px;
`;