// var age = prompt("Please enter your age:");

// if (age >= 0 && age <= 12) {
//     console.log("You are a Child.");
// } else if (age >= 13 && age <= 19) {
//     console.log("You are a Teenager.");
// } else if (age >= 20 && age <= 29) {
//     console.log("You are a Young Adult.");
// } else if (age >= 30) {
//     console.log("You are an Adult.");
// } else {
//     console.log("Invalid input.");
//}




// var coffeeSize = prompt("Please enter your coffee size (small, medium, large):");
// var price;

// if (coffeeSize === "small") {
//     price = 2.50;
// } else if (coffeeSize === "medium") {
//     price = 3.50;
// } else if (coffeeSize === "large") {
//     price = 4.50;
// } else {
//     console.log("Error: Invalid .");
//     // 
// }

// if (price !== undefined) {
//     console.log("Your " + coffeeSize + " coffee costs $" + price.toFixed(2));
// }


// var gpa = parseFloat(prompt("Please enter your GPA:"));

// if (isNaN(gpa)) {
//     console.log("Invalid input. Please enter a valid GPA.");
// } else if (gpa > 3.5) {
//     console.log("Excellent: Your academic standing is Excellent.");
// } else if (gpa >= 3.0 && gpa <= 3.5) {
//     console.log("Good: Your academic standing is Good.");
// } else if (gpa < 3.0) {
//     console.log("Needs Improvement: Your academic standing needs improvement.");
// } else {
//     console.log("Invalid input. Please enter a valid GPA.");
// }



// var mathScore = parseFloat(prompt("Enter your math score:"));
// var scienceScore = parseFloat(prompt("Enter your science score:"));
// var historyScore = parseFloat(prompt("Enter your history score:"));

// // Check if the entered values are valid numbers
// if (isNaN(mathScore) || isNaN(scienceScore) || isNaN(historyScore)) {
//     console.log("Invalid input. Please enter valid numeric scores.");
// } else {
//     // Calculate the average score
//     var average = (mathScore + scienceScore + historyScore) / 3;
    
//     // Determine the letter grade
//     var letterGrade;
//     if (average >= 90) {
//         letterGrade = "A";
//     } else if (average >= 80) {
//         letterGrade = "B";
//     } else if (average >= 70) {
//         letterGrade = "C";
//     } else if (average >= 60) {
//         letterGrade = "D";
//     } else {
//         letterGrade = "F";
//     }
    
//     console.log("Your average score is: " + average.toFixed(2));
//     console.log("Your letter grade is: " + letterGrade);
// }





// var number = parseFloat(prompt("Enter a number:"));

// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else {
//     if (number > 0) {
//         console.log("The number is positive.");
//         if (number % 2 === 0) {
//             console.log("The number is even.");
//         } else {
//             console.log("The number is odd.");
//         }
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }
