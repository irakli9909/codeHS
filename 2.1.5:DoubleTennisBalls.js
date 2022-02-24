function start(){
    doubleBalls();
    returnBalls();
    backHome();
}
// This function doubles the balls on the map
function doubleBalls(){
    move();
    if(ballsPresent()){
        while(ballsPresent()){
            takeBall();
            move();
            putBall();
            putBall();
            turnAround();
            move();
            turnAround();
        }
    }
}
//This function moves the balls to the right place
function returnBalls(){
    move();
    if(ballsPresent()){
        while(ballsPresent()){
            takeBall();
            turnAround();
            move();
            putBall();
            turnAround();
            move();
        }
    }
}
// function is go home
function backHome(){
    turnAround();
    move();
    move();
    turnAround();
}
