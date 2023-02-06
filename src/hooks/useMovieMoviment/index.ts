import { useState } from "react";

import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDiretionState] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: { key: any }) => {
   const direction: any  = event.key;

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDiretionState(direction)
  })
  return {
    position: positionState,
    direction: direction,
  }

}
export default useHeroMoviment;