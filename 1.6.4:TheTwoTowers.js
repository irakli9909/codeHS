function start(){
	move();
	buildCoins();
	turnRight();
	move();
	turnRight();
	move();
	move();
	turnLeft();
	move();
	buildCoinsFinish();
}

function buildCoins(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
} 

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}


function buildCoinsFinish(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
}
