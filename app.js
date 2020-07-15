var name = "Irene";
console.log(name);

var myLocation = "SF";
console.log(myLocation);

var favoriteNumber = 11;
console.log(favoriteNumber);

var teams = ["Lakers", "Warriors", "Clippers", "Blazers", "Celtics", "Nets", "Rockets"];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(number);
    // otherNumber += 1;
    otherNumber = otherNumber + 1; //
}

var numberTwo = 20;
var myOtherNumber = 10;
while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber);  // 10,11,12
    myOtherNumber += 1;  //11,12,13
}

var numberThree = 30;
var myOtherNumberThree = 15;
while (myOtherNumberThree < numberThree) {
    console.log(myOtherNumberThree);
    myOtherNumberThree += 1;
}


// for loops
for (var i = 0; i < 10; i++) {
    console.log(i);  // 0,1,2,3,4,5..9
}

// print team
for (var i = 0; i < teams.length; i++) {
    //console.log(teams[i]);
    
    var eachTeam = teams[i]; // Lakers, Warriors...
    console.log(eachTeam)
}

// make an array
//use a for loop to iterate through your array
//print each element in your array

var myFood = ["Chicken", "Bacon", "Vegetables", "Tomato", "Salad","Steak"];
for (var i = 0; i < myFood.length; i++) {
    var eachFood = myFood[i];
    console.log(eachFood)
}

const cars = ["Tesla", "Honda", "Toyota", "Ford"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    let eachCar = cars[i]; // Tesla, Honda...
    console.log(eachCar);
}

//objects
//keep: value pairs
const rome = {
    fullName: "Rome Bell",
    age: 32,
    myLocation: "San Francisco",
    placesTraveled: ["Kentucky", "Ohio","New York", "Washington"]
}
console.log(rome);

//myLocation
console.log(rome.myLocation);

//print New York
console.log(rome.placesTraveled[2]);

const myReallyCoolPost = {
    username: "@ga",
    likes: 1200,
    comments: ["really cool post", "nice", "javascript cool", "woah"],
    caption: "Day 3 of SEI",
    picture: "https://instagram.com/...",
    shares: 20
}
console.log(myReallyCoolPost)

myReallyCoolPost.myLocation = "LA";
console.log(myReallyCoolPost);

//likes, caption, shares, comments, username, picture

//instagram post object
let sentences = "I'm cool";
let sentencesTwo = "I'm not cool"

const FourthOfJulyPost = {
    username: "@ireneyap"
};

FourthOfJulyPost.picture = 'https//instagram.com/..'
FourthOfJulyPost.comments = 'woah'
FourthOfJulyPost.caption = "my dog is cute"

console.log(FourthOfJulyPost)

//Function
//console.log('Hello)

function sayHello() {
    //write my code / logic
    console.log('Hello');
}

sayHello();
sayHello();

//function expression
const sayHelloAgain = function() {
    console.log('Hello Again!')
};
sayHelloAgain();

//arrow function
const sayHelloFinal = () => {
    console.log('Hello for the last time')
};
sayHelloFinal();

// const numbers = [1,2,3,4,5,6,7,8,9];
// const otherNumbers = [10,20,30,40,50,60,70,80,90];
// function printNumbers(array) {
//     for (let i = 0; i < array.length; i++){
//         let num = array[i];  //10,20,30
//         console.log(num);
//     }
    
// };
// printNumbers(numbers);
// printNumbers(otherNumbers);

const otherNumbers = [10,20,30,40,50,60,70,80,90];
function printNumbers(array) {
    for (let i = 0; i < array.length; i++){
        let num = array[i];  //10,20,30
        
        if (num < 50) {
            console.log('This num is less than 50:' + num);
        } else {
            console.log('This num is greater than 50: ' + num);
        }
    }
    
};

printNumbers(otherNumbers);

const numbers = [1,2,3,4,5,6,7,8,9];
function addNumbers(array) {
    let result = 0;
    //expression, here is outside, down is inside the loop

    for (let i = 0; i < array.length; i++) {
        let num = array[i]; // 1,2,3,4,5...

         //result = result + num
        result += num; // 1,3,6,10(4+6),15(5+10)..
    }

    return result;
}

let myResult = addNumbers(numbers);
console.log(myResult);