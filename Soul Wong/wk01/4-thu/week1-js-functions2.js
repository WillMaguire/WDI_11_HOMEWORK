// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birthYear,currentYear){
	var baseAge = currentYear - birthYear;
	return "You are either "+baseAge+" or "+(baseAge-1);
}



//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(arrayOfStrings){
	var myArray=[];
	for(i=0;i<arrayOfStrings.length;i++){
		myArray.push(arrayOfStrings[i].length);
	}
	return myArray;
}



// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

 var transmogrifier = function(a,b,c){
 	return Math.power((a * b),c);
 }

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

var wordReverse = function(word){
	var array = word.split(' ');
	array.reverse();
	return array.join(' ');
}