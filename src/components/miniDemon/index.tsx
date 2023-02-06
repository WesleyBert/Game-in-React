import React from "react";
import useEnemyMoviment from "../../hooks/useEmenyMoviment";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";

import './index.css';

const MiniDemon= () => {
    const moviment = useEnemyMoviment({ x:10, y:5});

    return(
        <div 
        style={{
            position: 'absolute',
            bottom: TILE_SIZE * moviment.position.y,
            left: TILE_SIZE * moviment.position.x,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${ TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'mini-demon-animation 1s steps(4) infinite',
            transform: `scalex(${moviment.direction === EDirection.RIGHT? 1 : -1})`,
          }}
        />
    )
}

export default MiniDemon;