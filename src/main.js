import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MainGame } from './Game.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';

$(document).ready(function() {
  const player = new Player(10, 5);
  const en1 = new Enemy(15, 3);
  const startGame = new MainGame(player, en1);

  $("#strike").click(function() {
    startGame.enemyHit(en1, player.attack);
    console.log(startGame.enemy.hitPoints);
  });

  $("#end").click(function() {
    startGame.playerHit(player, en1.attack);
    console.log(startGame.player.hitPoints);
  });
});
