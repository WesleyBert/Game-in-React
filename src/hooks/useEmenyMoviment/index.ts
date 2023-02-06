import { useState } from "react";

import useInterval from "@use-it/interval";
import { EDirection } from "../../settings/constants";
import { handleNextPosition, handleNextsMoviment } from "../../contexts/canvas/helpers";

function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDiretionState] = useState(EDirection.RIGHT);

  useInterval(function move() {

    let random = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

   const nextMoviment =  handleNextPosition(randomDirection,positionState);

   updateDiretionState(randomDirection);
   updatePositionState(nextMoviment);
  }, 2000);

  return {
    position: positionState,
    direction: direction,
  }

}
export default useEnemyMoviment;