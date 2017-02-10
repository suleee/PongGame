import { SVG_NS } from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();
  }

reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    }

render(svg){
    let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'fill', 'white');
        ball.setAttributeNS(null, 'cx', this.x); //move this.boardWith/2 to reset //this will always in the center
        ball.setAttributeNS(null, 'cy', this.y); //y of the center point
        ball.setAttributeNS(null, 'r', this.radius);
    
        svg.appendChild(ball);

    }
}