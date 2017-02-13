import {
  SVG_NS,
  PADDLE
} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down, color, rx, ry) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = PADDLE.speed;
    this.score = PADDLE.score;
    this.color = color;
    this.rx = rx;
    this.ry = ry;

    document.addEventListener('keydown', event => {
      // console.log(event.keyCode);
      switch (event.keyCode) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });

  }

  //method
  up() {
    this.y = Math.max(2, this.y - this.speed);
  }
  down() {
    this.y = Math.min((this.boardHeight - 2) - this.height, this.y + this.speed);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'fill', this.color);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'stroke', 'black');
    rect.setAttributeNS(null, 'stroke-width', '1.5');
    rect.setAttributeNS(null, 'rx', this.rx);
    rect.setAttributeNS(null, 'ry', this.ry);
    svg.appendChild(rect);

  }
}