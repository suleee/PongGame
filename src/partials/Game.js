import {
	SVG_NS,
	KEYS,
	GAME
} from '../settings';
// ex) import HELLO { SVG_NS, KEYS } from '../settings';

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width; //view point
		this.height = height; //viewpoint
		this.boardGap = GAME.boardGap;
		this.paddleWidth = GAME.paddleWidth;
		this.paddleHeight = GAME.paddleHeight;

		this.gameElement = document.getElementById(this.element);
		this.pause = false;

		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(
			this.height,
			this.paddleWidth + 4,
			this.paddleHeight + 20,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'white',
			'7',
			'7',
		); //paddle: boardHeight, width, height, x, y
	
		this.paddle2 = new Paddle(this.height,
			this.paddleWidth + 4,
			this.paddleHeight + 20,
			this.width - this.boardGap - this.paddleWidth,
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'white',
			'7',
			'7',
		);

		this.ball = new Ball(10, this.width, this.height, 'orange');
		// this.ballEye = new Ball(4, this.width, this.height, 'black', KEYS.t);

		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
			}
		});

		this.paddle1score = new Score(230, 25, 25);
		this.paddle2score = new Score(348, 25, 25);
	}


	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);

		this.ball.render(svg, this.paddle1, this.paddle2);

		this.paddle1.render(svg);
		this.paddle2.render(svg);


		// this.score1.score = this.pladdle1.score;//oldways
		this.paddle1score.render(svg, 'p1: ' + this.paddle1.score);
		this.paddle2score.render(svg, 'p2: ' + this.paddle2.score);

	}

}