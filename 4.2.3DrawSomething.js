function start(){
    var rect = new Rectangle(90, 260);
    rect.setColor(Color.black);
    rect.setPosition(getWidth() / 2.5,100);
    add (rect);
    var rect2 = new Rectangle(80,250);
    rect2.setPosition(165,104);
    rect2.setColor(Color.gray);
    add (rect2);
    var circle = new Circle(30);
    circle.setColor(Color.red);
    circle.setPosition(205,142);
    add (circle);
    var circle2 = new Circle(30);
    circle2.setColor(Color.orange);
    circle2.setPosition(205,225);
    add (circle2);
    var circle3 = new Circle(30);
    circle3.setColor(Color.green);
    circle3.setPosition(205,310);
    add (circle3);
    var stolba = new Rectangle(8,150);
    stolba.setColor(Color.black);
    stolba.setPosition(200, 360);
    add (stolba);
    
   
}
