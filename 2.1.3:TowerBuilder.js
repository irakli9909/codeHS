function start() {
    build();
    while (frontIsClear()){
        moveTwice();
        if(frontIsBlocked()){
            turnAround();
            turnAround();
        }
    }
}

//This function is how to build tower
function build(){
    putBall();
    turnLeft();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
    
}

function moveTwice(){
    move();
    if(frontIsClear()) {
        move();
        build();
    }
}
