// Number Methods
console.log("\n-----Number Methods------\n")
let num = NaN;
console.log(num);



// String Methods
console.log("\n-----String Methods------\n")

var s = "hello world";

console.log(s.charAt(0)); // first character
console.log(s.charAt(s.length-1)); // last character
console.log(s.substring(1,4)); // substring index 1 to 4
console.log(s.slice(1,4)); // same as before step
console.log(s.slice(-3)); // last 3 characters
console.log(s.indexOf('l')); //pos of 1st first 'l'
console.log(s.indexOf('l',3)); // after index 3 first 'l' 
console.log(s.lastIndexOf("l")); // pos of last 'l
console.log(s.split(",")); // convert to array
console.log(s.split(" ")); // convert to array and split on space
console.log(s.replace('h','H')); // replace only 1st h to H
console.log(s.replace('l','L')); // replace only 1st h to H
console.log(s.toUpperCase()); // all to uppercase
console.log(s.toLowerCase()); // allto lowercase

// Escape Characters
console.log("\n-----Escape Characters------\n")

console.log("hello"+"world"); 
console.log("backspace =","hello"+'\b'+"world"); // backspace
console.log("tab =","hello"+'\t'+"world"); // tab
console.log("new line =","hello"+'\n'+"world"); // new line
console.log("vertical tab =","hello"+'\v'+"world"); // vertical tab
console.log("carriage return =","hello"+'\r'+"world"); // carriage return
console.log("double quote =","hello"+'\"'+"world"); // double quote
console.log("apostrophe =","hello"+'\''+"world"); // apostrophe

// Date
console.log("\n-----Date------\n")

var dt = new Date(); 

// var dt = new Date(yyyy,mm,dd);
console.log(dt);
console.log("Year =",dt.getFullYear()); // returns current year
console.log("Month =",dt.getMonth()); // month
console.log("Date =",dt.getDate()); // year
console.log("DAY (0 is Sunday) =",dt.getDay()); // day
console.log("Hours in 24 hr time =",dt.getHours()); //hours
console.log("Hours in UTC time =",dt.getUTCHours()); // UTC hours
console.log("Date to String =",dt.toString()); // date info to string
console.log("Date in local foramt =",dt.toLocaleDateString()); // Date to local format
console.log("Time in local foramt =",dt.toLocaleTimeString()); // Time to local format


console.log("\n-----Functions in JavaScript------\n")

// functions
var [p1,p2] = [10,20];
function myFunc(p1,p2){
    console.log(p1*p2);
}
myFunc(p1,p2);

// methods
const person = {
    firstName : "Peter",
    lastName : "Parker",
    id : 5556,
    age : 25,
    power : "spiderman",
    fullName : function(){
        return this.firstName+ " " +this.lastName; 
    }
};

// in object : this - refers to object
// in function : this - refers to global object
// in function (in strict mode) : this - refers to undefined
// in event : this - refers to element that receive event
// call(), apply(), bind() : this - to any object

console.log(person.fullName());

// class

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log(myCar.age(year));

// modules - import and export to send and get value from one file to another

// Function Anatomy

// function : expression
// myFun : name (optional)
// arg1, arg2 : parameters
// {} : body of function

function myFun(arg1, arg2){
    alert(arg1 + arg2);
};

// func statement 
function myFun (){

}

// fun expression 
var myFun = function() {

}


