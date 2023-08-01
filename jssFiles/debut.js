/*
var number = 9; //Declaring an int variable
let ourName = "Beau"; //Variable within the scope
var myStr = "I am a string inside a \"double quote\"";
console.log(myStr);
console.log(ourName);
var sum = 6 + 8;
var difference = 80 - 87;
var quotient = 66 / 33;
var product = 33 * 2;
number++;
console.log(number)
number--;
console.log(number)
console.log(sum)
console.log(difference)
console.log(product)
console.log(number)
console.log(number) */

/* var anDjective = "cool!";
var ourStr = "Freecode camp is ";
ourStr += anDjective
console.log(ourStr);
var stringLength = 0
stringLength = ourStr.length
firstChar = ourStr[0];
console.log("Length of ourStr = " + stringLength)
lastChar = ourStr[21]
console.log(lastChar)
*/


/* function textBlanks(myAdjective, myNoun, myVerb, myAdverb){
    result = "";    //Empty string

    result = "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result; 
}

console.log(textBlanks("big", "dog", "ran", "quickly"));
console.log(textBlanks("fiercing", "lion", "ran", "quickly"))
*/

/// Arrays

/* var myArray = ["Confident", "Fantasy", 21, ["Dancing", "Sun-Cheeks"], "Chance"];
var arrayLength = myArray.length;
console.log(arrayLength);
console.log(myArray);
myArray.pop();   //Removes last element
console.log(myArray);
myArray.shift();     //Removes first element
console.log(myArray);
myArray.unshift("Coachelaa");   //Adds first element
console.log(myArray);
myArray.push("CodeAcademy");     //Adds last element
console.log(myArray);
*/

//  Functions

/* function addNumbers(num1, num2){
    console.log(num1 + num2);   // Prints results to screen
}

function subtractNumbers(num1, num2){
    console.log(num1 - num2);   // Prints results to screen
}

addNumbers(89, 90);
subtractNumbers(90, 56);
*/

var globalVar = 10;

/* function fun2(){
    var localVar = 15;
}

function fun1()
{
    var outPut = "";

    if (typeof globalVar != "undefined"){
        outPut += "Output: " + globalVar;
    }

    if (typeof localVar != "undefined")
    {
        outPut += "\nOutput: " + localVar;
    }

    console.log(outPut);
}

fun2();
fun1();
*/

/* function nextInLine(arr, item) {
    arr.push(item);
    return(arr.shift());
}

var myArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(myArray));
console.log(nextInLine(myArray, 6));
console.log("After: " + JSON.stringify(myArray));
*/

/* function trueOrFalse(thatTrue) {
    if (thatTrue) {
        return ("That was true!");
    }
    return ("That was false");
}

console.log(trueOrFalse(true))
*/

/* function size(unit)
{
    if (unit < 5){
        return "Tiny";
    }
    else if (unit < 10){
        return "small";
    }
    else if (unit < 15){
        return "medium";
    }
    else if (unit < 20){
        return "large";
    }
    else{
        return "huge";
    }
}

console.log(size(15))
*/

/* var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Doubel Bogey", "Go home"];

function golfScore(par, strokes)
{
    if (strokes == 1){
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes <= par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes <= par + 1) {
        return names[4];
    }
    else if (strokes <= par + 2) {
        return names[5];
    }
    else{
        return names[6];
    }
}

console.log(golfScore(5,9));
*/

//  Switch statements
/* function chooseInput(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "banana";
            break;
        case "c":
            answer = "carrot";
            break;
        case "d":
            answer = "dandora";
            break;
        default:
            answer = "Wrong Input";
            break;
    }
    return answer;
}

console.log(chooseInput(7));
*/

// OOP

var myDog = {
    "name": "Quincy",
    "age": 6,
    "legs": 4,
    "tail": 1,
    "colour": "gray",
    "friends": ["Everything"],
    "date of Birth": "January"

};

var dogName = myDog.name; // Accessing the properties
var dogAge = myDog.age;   // Accessing the properties
var dogFriends = myDog.friends;  // Accessing the properties
var dogBirth = myDog["date of Birth"];  // Accessing the properties

/*
console.log(dogName);
console.log(dogAge);
console.log(dogFriends);
console.log(dogBirth);
*/

myDog.bark = "Ooof!"  // Adding a property
delete myDog["date of Birth"];
var dogBark = myDog.bark;
//console.log(dogBark)


// Using Object as LookUp
function lookUp(val){
    var result = "";

var lookUpObject = {
    "alpha": "adams",
    "bravo": "Boston",
    "charlie": "chicago",
    "delta": "Denver",
    "echo": "easy",
    "foxroot": "frank"
};
    result = lookUpObject[val];
    return result;
}

//console.log(lookUp("alpha"));

// Check if an object has a property

function checkProp(valCheck) {
    if (myDog.hasOwnProperty(valCheck)) {
        return myDog[valCheck]
    }
    else{
        return "Not Found!";
    }
}

//console.log(checkProp("sick"));

// Loops
// while loop

var myArray = [];
var number = 0;

while (number < 5)
{
    myArray.push(number);
    number++;
}

//console.log(myArray);

// For Loop
var anotherArray = [2, 6, 7, 4, 8];
var totalSum = 0;

for (var index = 0; index < anotherArray.length; index++) {
    totalSum += anotherArray[index];
}
for (var index = 0; index < anotherArray.length; index++) {
    //console.log(anotherArray[index]);
}
//console.log(totalSum);

function compoundTernary(num)
{
    return num > 0 ? "Positive" : num < 0 ? "Negative": "Zero";
}

//console.log(compoundTernary(0));

// Object Freeze

function freezeObject() {
    "use strict";

    const MATH_PI = {
        PI : 3.142
    };

    Object.freeze(MATH_PI);

    try {
        MATH_PI.PI = 99;
    } catch (ex)
    {
        console.log(ex);
    }

    return MATH_PI.PI;
}

const PI = freezeObject();
console.log(PI);