import './styles/game.css';
import Game from './partials/Game';


// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
    game.render(); //Game.js's at the last render part
    requestAnimationFrame(gameLoop); //re-drawing this game 

})(); //immiately call, this is an argurment of gameLoop

