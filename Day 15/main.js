// Q 116:
//Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same
// block of code, which is handy for categorizing items into broader groups.
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
    }
}
// logSeason(12) ; // winter
// logSeason(7) ;  // summer
logSeason(5); // spring
// logSeason(9) ;  // autumn
//.........................................................................................................................
// Q 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other
// case labels match the expression's value.
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}
evaluateGrade("A");
//...........................................................................................................................
// Q 118:
// Write a loop that logs numbers from 1 to 10 to the console.
// Explain & TIP: A for loop is a concise way to run a block of code a specific number of times. It's perfect for
// when you know exactly how many iterations you need.
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
//................................................................................................................................
// Q 119: Create a while loop that logs "Hello, World!" 5 times.
// Explain & TIP: A while loop continues to run as long as its condition remains true. It’s ideal for when you want to
// repeat something until a certain condition changes.
var count = 0;
while (count < 2) {
    console.log("Sir Hamza Alvi is a GEM");
    count++;
}
//......................................................................................................................................
// Q 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, 
//Maps, NodeLists, and more, making it very readable and easy to use.
var favoriteSurah = [
    "Al-Fatiha",
    "Al-Baqarah",
    "Al- Waqiyah",
    "Al- Sajdah",
];
for (var _i = 0, favoriteSurah_1 = favoriteSurah; _i < favoriteSurah_1.length; _i++) {
    var surah = favoriteSurah_1[_i];
    console.log(surah);
}
