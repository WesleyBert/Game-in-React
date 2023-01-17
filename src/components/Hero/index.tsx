import useEventListener from "@use-it/event-listener";

import React , {useState} from "react";
import { TILE_SIZE, HEAD_OFFSET } from "../../settings/constants";

import './index.css';

const initialPosition = {
    x: 15,
    y: 15
};

const Hero = () => {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [diretion, updateDiretionState] = useState('RIGHT');
 
    useEventListener('keydown', (event:{key:any}) => {
        if(event.key === 'ArrowLeft') {
           updatePositionState({ x: positionState.x -1, y: positionState.y })
           updateDiretionState('LEFT')
        } else if (event.key === 'ArrowRinght'){
               updatePositionState({x: positionState.x + 1, y: positionState.y,})
               updateDiretionState('RIGHT')
        } else if (event.key === 'ArrowDown'){
               updatePositionState({ x: positionState.x, y: positionState.y - 1,  })
        } else if (event.key === 'ArrowUp'){
          updatePositionState({ x: positionState.x , y: positionState.y + 1}); 
        }
        
    })


    return(
        <div 
        style={{
            position: 'absolute',
            bottom: TILE_SIZE * positionState.y,
            left: TILE_SIZE * positionState.x,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${ TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'hero-animation 1s steps(4) infinite',
            transform: `scaleX(${diretion === 'RIGTH' ? 1 : -1})`
        }}
        />
    )
}

export default Hero;