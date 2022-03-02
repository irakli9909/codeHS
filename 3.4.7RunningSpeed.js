/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
	var miles = readInt("What is your miles? ");
	var minuts = readInt("What is your time? ");
	println("speed in mph: " + miles / (minuts / 60) );
}
