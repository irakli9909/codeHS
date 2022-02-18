function start() {
    movefront();
    
    
}

function movefront(){
    if(frontIsClear()){
        move();
    }else{
        turnLeft();
        move();
    }
}
