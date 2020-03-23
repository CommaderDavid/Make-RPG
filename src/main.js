import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MainGame } from './Game.js';
import { CurrentFighter } from './currentFighter.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';

$(document).ready(function() {
  const player = new Player(10, 5);
  const en1 = new Enemy(15, 3);
  const en2 =new Enemy(10, 9);
  const boss = new Enemy(50, 15);

  let enemySwitch = en1;
  if (en1.inCombat === false) {
    enemySwitch = en2;
  } else if (en2 === false;) {
    enemySwitch = boss;
    // need to find a way to turn enemys in combat trait to false if not active
  }
  
  const startGame = new MainGame(player, enemySwitch);
  const currentBattle = new CurrentFighter(enemySwitch);

  $("#enemyHP").append(en1.hitPoints);
  $("#playerHP").append(player.hitPoints);

  $("#strike").click(function(e) {
    e.preventDefault();

    startGame.enemyHit(en1, player.attack);
    console.log(startGame.enemy.hitPoints);

    $("#enemyHP").empty().append(en1.hitPoints);

    $("button#strike").prop("disabled", true);
    $("button#end").prop("disabled", false);

    if (en1.hitPoints <= 0) {
      // $("#results").empty().append("<h3>" + "You Win!" + "</h3>");

    }
  });

  $("#end").click(function() {
    startGame.playerHit(player, en1.attack);
    console.log(startGame.player.hitPoints);

    $("#playerHP").empty().append(player.hitPoints);

    $("button#end").prop("disabled", true);
    $("button#strike").prop("disabled", false);

    if (player.hitPoints <= 0) {
      $("#results").empty().append("<h3>" + "Game Over" + "</h3>");
    }
  });
});
