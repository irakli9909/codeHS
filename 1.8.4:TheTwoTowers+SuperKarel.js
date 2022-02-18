/*This program is how to build two towers.
*It is very simple
*/
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

/*This function is build towers
*/
function buildCoins(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
} 

/*this is build and finish towers
*/
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
