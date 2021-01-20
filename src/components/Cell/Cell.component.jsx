import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { shootCell } from '../../redux/actions';
import { StyledCell } from './Cell.style';
import { animated, useSpring, useTransition } from "react-spring";
import { memo } from 'react';

function Cell(props) {
    const {index, wasHit=false, ship, onDragOver, onDrop} = props;
    const { type, shipIndex, direction } = ship || {};
    console.log("Render => ", index, wasHit);
    const cssClasses = classnames({
        'busy': wasHit,
    });

    const username = useSelector(({loggedUser}) => loggedUser.username);
    const dispatch = useDispatch();

    const test = useSpring({

        config: { duration: 1000 },
        from: {
            // boxShadow: '0 0 0 1px rgba(255,0,0, 0.2)',
            opacity: 0
        },
        to: [
                {
                    boxShadow: '0 0 0 25px rgba(255,0,0, 0.2)',
                    opacity: wasHit ? 1 : 0
                },
                {
                    boxShadow: '0 0 0 15px rgba(255,0,0, 0.2)',
                    opacity: wasHit ? 0.5 : 0
                },
                {
                    boxShadow: '0 0 0 0px rgba(255,0,0, 0.2)',
                    opacity: wasHit ? 1 : 0
                }
            ],
        // to: async next => {
        //     while (1) {
        //         await next({
        //             boxShadow: '0 0 0 25px rgba(255,0,0, 0.2)',
        //             opacity: 1
        //         })
        //         await next({
        //             boxShadow: '0 0 0 15px rgba(255,0,0, 0.2)',
        //             opacity: 0.5
        //         })
        //         await next({
        //             boxShadow: '0 0 0 5px rgba(255,0,0, 0.2)',
        //             opacity: 0.3
        //         })
        //     }
        // }
    });


    const handleCellClick = () => {
        if(!wasHit){
            dispatch(shootCell({ user: username, index}));
        }
    }

    return (
        <StyledCell className={cssClasses}
            {...props}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, {targetBoardIndex: index})}
            onClick={handleCellClick}
        >
            <animated.div style={test} className="ripple"/>
        </StyledCell>
    );
}

export default memo(Cell);