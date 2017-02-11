import {
    SVG_NS
} from '../settings';

export default class Ball {

    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.ping = new Audio('public/sounds/pong-01.wav');

        this.reset();

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
                this.ping.play();
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
            }
        }
    }

    goal(paddle) {
        //incresement the score
        paddle.score++;
        //reset the ball
        this.reset();
    }


    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while (this.vy === 0) {
            //when this.vy hit 0 do math again
            this.vy = Math.floor(Math.random() * 10 - 5); //a number between -5 and 5 //direction of the ball
        }
        this.vx = this.direction * (6 - Math.abs(this.vy)); //abs abosoulte
    }

    render(svg, paddle1, paddle2) {
        this.x += this.vx; //this.x = this.x + this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);

        // let eyes = document.createElementNS(SVG_NS, 'circle');
        // eyes.setAttributeNS(null, 'fill', 'orange');
        // eyes.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
        // eyes.setAttributeNS(null, 'cy', this.y); //y of the center point
        // eyes.setAttributeNS(null, 'r', this.radius);
        // eyes.setAttributeNS(null, 'stroke', 'black');
        // eyes.setAttributeNS(null, 'stroke-width', '2');
        // svg.appendChild(eyes);


        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'fill', 'orange');
        ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
        ball.setAttributeNS(null, 'cy', this.y); //y of the center point
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'stroke', 'black');
        ball.setAttributeNS(null, 'stroke-width', '1');
        svg.appendChild(ball);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(paddle1);
            this.durction = 1;
        } else if (leftGoal) {
            this.goal(paddle2);
            this.durction = -1;
        }

    }
}