import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MainGame } from './Game.js';
import { CurrentFighter } from './currentFighter.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';

$(document).ready(function() {
  const player = new Player(500, 5);
  const en1 = new Enemy(15, 3);
  const en2 =new Enemy(10, 9);
  const boss = new Enemy(50, 15);

  let enemySwitch = en1;

  const startGame = new MainGame(player, enemySwitch);
  const currentBattle = new CurrentFighter(enemySwitch);

  $("#enemyHP").append(enemySwitch.hitPoints);
  $("#playerHP").append(player.hitPoints);

  $("#strike").click(function(e) {
    e.preventDefault();

    if (en1.dead === true) {
      $("#results").empty();
      enemySwitch = en2;
      console.log(enemySwitch, "enemy2");
    } else if (en1.dead === true && en2.dead === true) {
      $("#results").empty();
      enemySwitch = boss;
      console.log(enemySwitch, "boss");
      // need to find a way to turn enemys in combat trait to false if not active
    }

    startGame.enemyHit(enemySwitch, player.attack);
    console.log(startGame.enemy.hitPoints);

    $("#enemyHP").empty().append(enemySwitch.hitPoints);

    $("button#strike").prop("disabled", true);
    $("button#end").prop("disabled", false);

    if (enemySwitch.hitPoints <= 0) {
      $("#results").empty().append("<h3>" + "You Win!" + "</h3> <br>" + "<h3>" + "Next oppenet" + "</h3>");

    }
  });

  $("#end").click(function() {
    startGame.playerHit(player, enemySwitch.attack);
    console.log(startGame.player.hitPoints);

    $("#playerHP").empty().append(player.hitPoints);

    $("button#end").prop("disabled", true);
    $("button#strike").prop("disabled", false);

    if (player.hitPoints <= 0) {
      $("#results").empty().append("<h3>" + "Game Over" + "</h3>");
    }
  });
});
