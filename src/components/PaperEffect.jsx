import React from 'react';
import styled from 'styled-components';
import Cell from './Cell/Cell.component';

const StyledBoard = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: gray;
    z-index: -1;
    display: grid;
    grid-template-rows: repeat(auto-fill, 7vmin);
    grid-template-columns: repeat(auto-fill, 7vmin);
    overflow: hidden;
`;

function PapperEffect(props) {
    const {width} = props;
    console.log("Board => ", width);
    return (
        <StyledBoard width={width}>
            {
                Array.from(Array(1000).keys()).map(index => (<Cell key={index}></Cell>))
            }
        </StyledBoard>
    );
}

export default PapperEffect;