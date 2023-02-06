import useEventListener from "@use-it/event-listener";

import React, { useState } from "react";
import useHeroMoviment from "../../hooks/useMovieMoviment";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";

import './index.css';

const initialPosition = {
  x: 15,
  y: 15
};

const Hero = () => {
  const moviment = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.y,
        left: TILE_SIZE * moviment.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default Hero;