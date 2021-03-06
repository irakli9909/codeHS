/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

	/* Write your code to make the snowman here! */
function start(){
    var height = getHeight();
    var width = getWidth();
	var circle1 = new Circle(BOTTOM_RADIUS);
    	circle1.setPosition(width /2, height - 100);
    	circle1.setColor(Color.gray);
    	add(circle1);
	var circle2 = new Circle(MID_RADIUS);
	    circle2.setPosition(width / 2, height - 260);
	    circle2.setColor(Color.gray);
    	add(circle2);
	var circle3 = new Circle(TOP_RADIUS);
	    circle3.setPosition(width / 2, height - 350);
	    circle3.setColor(Color.gray);
    	add(circle3);
}
