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