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