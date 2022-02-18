function start () {
    putBall();
    for(var i = 0; i < 5; i++){
        move();
    }
    turnLeft();
    putBall();
    moveFive();
    putBall();
    turnLeft();
    moveFive();
    putBall();
    turnLeft();
    moveFive();
    turnLeft();
    
}

function moveFive(){
    for(var i = 0; i < 5; i++){
        move();
    }
}
