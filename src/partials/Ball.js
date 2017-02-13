import {
    SVG_NS
} from '../settings';

export default class Ball {

    constructor(radius, boardWidth, boardHeight, colorfill, controls) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.colorfill = colorfill;

        this.direction = 1;
        this.ping1 = new Audio('public/sounds/pong-02.wav');
        this.ping2 = new Audio('public/sounds/pong-04.wav');

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

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitLeft || hitRight) {
            return this.vx = -this.vx;
        } else if (hitTop || hitBottom) {
            return this.vy = -this.vy;
        }
    }

    paddleCollision(paddle1, paddle2) {
        if (this.vx > 0) {
            let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                this.x + this.radius >= leftX
                //right edge of the ball is >= left edge of the paddle &&
                &&
                this.x + this.radius <= rightX
                //right edge of the ball is <= right edge of the paddle &&
                &&
                this.y >= topY &&
                this.y <= bottomY
                //ball Y is >= paddle top Y and ball Y <= paddle bottom Y
            ) {
                this.vx = -this.vx;
                this.ping1.play();
            }
        } else {
            let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                this.x - this.radius >= leftX &&
                this.x - this.radius <= rightX &&
                this.y >= topY &&
                this.y <= bottomY
            ) {
                this.vx = -this.vx;
                this.ping1.play();

            }
        }
    }

    goal(paddle) {
        //incresement the score
        paddle.score++;
        this.ping2.play();
        if (paddle.score === 15) {
            this.reset();
        }
    }


    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vx = 0;
        this.vy = 0;
    }
    // goal(player) {
    //     player.score++;
    //     this.reset();
    // }
    // reset() {
    //     this.x = this.boardWidth / 2;
    //     this.y = this.boardHeight / 2;
    //     this.vy = 0;
    //     while (this.vy === 0) {
    //         this.vy = Math.floor(Math.random() * 10 - 5);
    //     }
    //     this.vx = this.direction * (6 - Math.abs(this.vy));
    // }


    render(svg, paddle1, paddle2) {

        this.x += this.vx; //this.x = this.x + this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);

        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'fill', this.colorfill);
        ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
        ball.setAttributeNS(null, 'cy', this.y); //y of the center point
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'stroke', 'black');
        ball.setAttributeNS(null, 'stroke-width', '1.5');
        svg.appendChild(ball);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(paddle1);
            this.direction = 1;
        } else if (leftGoal) {
            this.goal(paddle2);
            this.direction = -1;
        }
    }
}