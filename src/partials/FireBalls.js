import {
    SVG_NS,
    GAME
} from '../settings';

export default class FireBalls {

    constructor(radius, boardWidth, boardHeight, colorfill, controls) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.colorfill = colorfill;
        this.paddleWidth = GAME.paddleWidth;

        this.direction = 1;

        this.reset();

        document.addEventListener('keydown', event => {
            if (this.vx === 0 && this.vy === 0 && event.keyCode === controls) {
                const generateSpeed = () => {
                    while (this.vy === 0) {
                        this.vy = Math.floor(Math.random() * 10 - 5); //a number between -5 and 5 //direction of the ball
                    }
                    this.vx = this.direction * (6 - Math.abs(this.vy));
                    //stops x & y from being at 0
                    if (this.vx === 0 || this.vy === 0) {
                        generateSpeed();
                    }
                }
                generateSpeed();
            }
        });
    }

    reset() {
        this.x = this.paddleWidth + 7;
        this.y = this.boardHeight / 2;

        this.vx = 0;
        this.vy = 0;
    }

    render(svg) {

        this.x += this.vx; //this.x = this.x + this.vx;
        this.y += this.vy;

        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'fill', this.colorfill);
        ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
        ball.setAttributeNS(null, 'cy', this.y); //y of the center point
        ball.setAttributeNS(null, 'r', this.radius);
        svg.appendChild(ball);
    }

}