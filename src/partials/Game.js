import {
	SVG_NS,
	KEYS
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
		this.boardGap = 10;
		this.paddleWidth = 8; // try to pur this into settings
		this.paddleHeight = 56;

		this.gameElement = document.getElementById(this.element);
		this.pause = true;
		this.s = true;

		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(
			this.height,
			this.paddleWidth + 2,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
		); //paddle: boardHeight, width, height, x, y

		this.paddle2 = new Paddle(this.height,
			this.paddleWidth + 2,
			this.paddleHeight,
			this.width - this.boardGap - this.paddleWidth,
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);

		this.ball = new Ball(10, this.width, this.height, 'orange');
		this.fireball = new Ball(4, this.width, this.height, 'pink');

		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
				case KEYS.s:
					this.s = !this.s;
					break;
			}
		});

		this.paddle1score = new Score(210, 35, 30);
		this.paddle2score = new Score(290, 35, 30);
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

		this.fireball.render(svg, this.paddle1, this.paddle2);
		this.ball.render(svg, this.paddle1, this.paddle2);

		this.paddle1.render(svg);
		this.paddle2.render(svg);

		// this.score1.score = this.pladdle1.score;//oldways
		this.paddle1score.render(svg, this.paddle1.score);
		this.paddle2score.render(svg, this.paddle2.score);

	}

}