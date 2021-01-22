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
        // loop: true,
        reset: true,
        from: {
            boxShadow:
                "0 0 0 0vmin rgba(66, 156, 234, 1), 0 0 0 1vmin rgba(66, 156, 234, 1), 0 0 0 2vmin rgba(66, 156, 234, 1), 0 0 0 4vmin rgba(66, 156, 234, 1)",
            opacity: 0
        },
        to: [
            {
                boxShadow:
                    "0 0 0 1vmin rgba(66, 156, 234, 0), 0 0 0 2vmin rgba(66, 156, 234, 0), 0 0 0 3vmin rgba(66, 156, 234, 0), 0 0 0 5vmin rgba(66, 156, 234, 0)",
                opacity: (wasHit ? 1 : 0)
            }
        ],
        config: { duration: 600 }
    });

//     0 % {
//         box- shadow: 0 0 0 0rem rgba($ripple - color, 0.2),
//             0 0 0 1rem rgba($ripple - color, 0.2),
//                 0 0 0 2rem rgba($ripple - color, 0.2),
//                     0 0 0 5rem rgba($ripple - color, 0.2);
// }
// 100 % {
//     box- shadow: 0 0 0 1rem rgba($ripple - color, 0.2),
//         0 0 0 2rem rgba($ripple - color, 0.2),
//             0 0 0 5rem rgba($ripple - color, 0.2),
//                 0 0 0 8rem rgba($ripple - color, 0);
//       }


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