// settings.js
export const SVG_NS = 'http://www.w3.org/2000/svg';

export const KEYS = {
  a: 65, // player 1 up key
  z: 90, // player 1 down key
  s: 83,//left fire ball
  up: 38, // player 2 up key
  down: 40, // player 2 down key
  left: 37,//right fire ball
  spaceBar: 32, // we'll use this later...
  t: 84 //mutiple balls
}

export const GAME = {
	boardGap: 10,
	paddleWidth: 8,
	paddleHeight: 56
}

export const PADDLE = {
    speed: 50,
    score: 0
}