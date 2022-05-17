console.log(sun(2, 3)); //5

function sun (a, b){
    return a + b;
}

console.log(sun(2, 3)); //5

//---------------------------------------------------------------------

console.log(i); //undefinded
var i =42;
console.log(i); //42


//console.log(num); //error
const num = 47;
console.log(num); //47


//console.log(number); //error
let number = 50;
console.log(number); //50

//------------------------------------------------------------------------

//Function Expression & Function Declaration

console.log(square(25)); //625

//Function Declaration
function square(num){
    return num ** 2
}

//console.log(square2(25)); //error

//Function Expression
const square2 = function (num) {
    return num **2
}
console.log(square2(25)); //625

