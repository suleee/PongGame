import {
    SVG_NS
} from '../settings'

export default class Score {

    constructor(x, y, size, fill, stroke, swidth, player) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = fill;
        this.player = player;
        this.swidth = swidth;
        this.stroke = stroke;
    }

    render(svg, scorecount) {

        let score = document.createElementNS(SVG_NS, 'text');
        score.setAttributeNS(null, 'x', this.x); //move this.boardWith/2 to reset //this will always in the center
        score.setAttributeNS(null, 'y', this.y); //y of the center point
        score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        score.setAttributeNS(null, 'font-size', this.size);
        score.setAttributeNS(null, 'fill', this.fill);
        score.setAttributeNS(null, 'stroke', this.stroke);
        score.setAttributeNS(null, 'stroke-width', this.swidth);
        score.textContent = scorecount; //scorecount becasue I already named the let score 
        svg.appendChild(score);
    }
}