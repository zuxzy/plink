var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = [];
var plinkos = [];
var particle;

var divisionHeight = 300;
var score = 0;
var count = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);


  text("20", 20, 520);
  text("10", 100, 520);
  text("5", 180, 520);
  text("2", 260, 520);

  text("1", 340, 520);
  text("1", 420, 520);
  text("2", 500, 520);

  text("5", 580, 520);
  text("10", 660, 520);
  text("20", 740, 520);

 

  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760 && particle.body.position.x < 80) {
      score = score + 20;
      particle = null;
      if (count === 5) {
        gameState = "end";
      }


    }
    else if (particle.body.position.y > 760 && particle.body.position.x > 0 && particle.body.position.x < 160) {
      score = score + 10;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 160 && particle.body.position.x < 240) {
      score = score + 5;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 240 && particle.body.position.x < 320) {
      score = score + 2;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 320 && particle.body.position.x < 400) {
      score = score + 1;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 400 && particle.body.position.x < 480) {
      score = score + 1;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 480 && particle.body.position.x < 560) {
      score = score + 2;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 560 && particle.body.position.x < 640) {
      score = score + 5;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 640 && particle.body.position.x < 720) {
      score = score + 10;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }

    else if (particle.body.position.y > 760 && particle.body.position.x > 720 && particle.body.position.x < 800) {
      score = score + 20;
      particle = null;
      if (count === 5) {

        gameState = "end";
      }
    }
  }


  if (gameState === "end") {
    textSize(40);
    fill("brown")

    text("G A M E  O V E R", 250, 235);

  }
  //if(frameCount%60===0){
  //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //score++;
  //}

  for (var j = 0; j < divisions.length; j++) {

    divisions[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}
function mousePressed() {
  if (gameState != "end") {

    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
};