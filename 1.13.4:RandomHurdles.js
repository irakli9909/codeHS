function start(){
    if (frontIsBlocked()){
        for(var i = 0; i < 13; i++){
            jumpHurdle();
        }
    }else{
        for(var i = 0; i < 13; i++){
            jumpHurdle();   
        }
    }
}

function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
