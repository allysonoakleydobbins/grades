

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
var GradeA = 0
var GradeB = 0
var GradeC = 0
var GradeD = 0
var GradeF = 0

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

for (i = 0; i < scores.length; i++){
	if (scores[i] <= 60) {
		GradeF++;
	} else if (scores[i] <= 70) {
		GradeD++;
	} else if (scores[i] <= 80) {
		GradeC++;
	} else if (scores[i] <= 90) {
		GradeB++;
	} else if (scores[i] <= 100) {
		GradeA++;
	}
}

var highest = 0	
// What is the highest grade?
for (var i = 0; i < scores.length; i++){
	 if (scores[i] > highest){
 	highest = scores[i];
 }
}

// What is the lowest grade?
var lowest = 100
for (var i = 0; i < scores.length; i++){
	if (scores[i] < lowest) {
		lowest = scores[i];
	}
}

// Use console.log to output criteria
// How many of each grade?
console.log("You have " + GradeF + " Fs");
console.log("You have " + GradeD + " Ds");
console.log("You have " + GradeC + " Cs");
console.log("You have " + GradeB + " Bs");
console.log("You have " + GradeA + " As");

// What is the lowest grade?
console.log(lowest);
// What is the highest grade?
console.log(highest);