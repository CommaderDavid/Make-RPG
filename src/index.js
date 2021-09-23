import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MainGame } from './Game.js';
import { CurrentFighter } from './currentFighter.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';

$(document).ready(function () {
  const player = new Player(18, 5, 15);
  const en1 = new Enemy(15, 3);
  const en2 = new Enemy(10, 6);
  const en3 = new Enemy(20, 5);
  const en4 = new Enemy(5, 12);
  const boss = new Enemy(30, 7);

  let enemySwitch = en1;

  const startGame = new MainGame(player, enemySwitch);
  const currentBattle = new CurrentFighter(enemySwitch);

  $("#enemyHP").append(enemySwitch.hitPoints);
  $("#typeEnemy").append("First Enemy");
  $("#playerHP").append(player.hitPoints);

  $("#strike").click(function (e) {
    e.preventDefault();

    startGame.enemyHit(enemySwitch, player.attack);
    $("#enemyHP").empty().append(enemySwitch.hitPoints);

    // Changes the enemies when their hit points reach 0.
    if (en1.dead === true && en2.dead === false) {
      $("#results").empty();
      enemySwitch = en2;
      $("#typeEnemy").empty().append("Second Enemy");

    } else if (en2.dead === true && en3.dead === false) {
      $("#results").empty();
      enemySwitch = en3;
      $("#typeEnemy").empty().append("Third Enemy");

    } else if (en3.dead === true && en4.dead === false) {
      $("#results").empty();
      enemySwitch = en4;
      $("#typeEnemy").empty().append("Forth Enemy");

    } else if (en1.dead === true && en2.dead === true && en3.dead === true && en4.dead === true) {
      $("#results").empty();
      enemySwitch = boss;
      $("#typeEnemy").empty().append("Big Bad Boss");
    }
    // if statments are good in both business and user, but not all.
    // Could have put this one in the background to prevent repeats of single use "items"

    $("button#strike").prop("disabled", true);
    $("button#end").prop("disabled", false);

    if (enemySwitch.hitPoints <= 0) {
      $("#results").empty().append("<h3>" + "You Win!" + "</h3> <br>" + "<h3>" + "Next oppenet" + "</h3>");
    }
  });

  $("#end").click(function () {
    startGame.playerHit(enemySwitch.attack);
    console.log(startGame.player.hitPoints, "player hit");
    $("#playerHP").empty().append(player.hitPoints);

    $("button#end").prop("disabled", true);
    $("button#strike").prop("disabled", false);

    if (player.hitPoints <= 0) {
      $("#results").empty().append("<h3>" + "Game Over" + "</h3>");

      $("button#strike").prop("disabled", true);
      $("button#end").prop("disabled", true);
    }
  });
});
