/* This program should draw the Netherlands flag. The
 * top third of the canvas is red, the middle third
 * is white, and the bottom third is blue. */
function start(){
 var newRect = new Rectangle (getWidth(), getHeight()/3);
 newRect.setColor(Color.red);
 newRect.setPosition(0,0);
 add(newRect);

 var newRect2 = new Rectangle (getWidth(), getHeight()/3);
 newRect2.setColor(Color.white);
 newRect2.setPosition(0,getHeight()/3 *2);
 add(newRect2);

 var newRect3 = new Rectangle ( getWidth(), getHeight()/3);
 newRect3.setColor(Color.blue);
 newRect3.setPosition(0,getHeight() /3 *2);
 add(newRect3);
}
