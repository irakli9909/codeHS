function start() {
    if(noBallsPresent()){
        moveUp();
        if(ballsPresent()){
            goBack();
        }    
    }
    if(frontIsBlocked()){
        frontIsB();
    }
}
//this function is take ball
function moveUp(){
    turnLeft();
    for(var i = 0; i < 4; i++){
        move();
    }
    turnRight();
    move();
    move();
}
//This function is go start position
function goBack(){
    takeBall();
    turnAround();
    move();
    move();
    turnLeft();
    for(var i = 0; i < 4; i++){
        move();
    }
}
//This function is putball
function frontIsB(){
    turnLeft();
    putBall();
}
