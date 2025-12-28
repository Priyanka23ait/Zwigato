
console.log("JS loaded!");
//CLOSURE IN JAVASCRIPT

function outerFunction() {
    let outerVariable = "Hi, ";
    function innerFunction(name) {
        console.log(outerVariable + name);
    }
    return innerFunction;
}

const greet = outerFunction(); //return innerFunction()
greet("Priya");


//CALL, APPLY AND BIND METHOD IN JAVASCRIPT

let name2 = {
  firstName:"Priyanka",
  lastName:"Arora",
 
}
let printFullName = function(locality,city){  
    console.log("My name is " + this.firstName + " " + this.lastName
    +" from " + locality + "," + city);
}

printFullName.call(name2, "Geeta Colony" , "Delhi"); // call method

printFullName.apply(name2, ["Geeta Colony" , "Delhi"]); // call method

let printMyName=printFullName.bind(name2, "Geeta Colony" , "Delhi");
console.log(printMyName); // bind method
printMyName();

//PROMISE 

var promise = new Promise(function(resolve, reject) {
 const x = 10;
 const y = 10;

if(x === y) {
    resolve("Values are equal");
}
else{
        reject("Values are not equal");
    }
});


//PROTOTYPE

function Person(name5){
   this.name5 = name5;
}

Person.prototype.greetHello = function(){
    console.log("Hello " + this.name5);
}

const alice = new Person("Alice");
alice.greetHello(); // Output: Hello Alice


//CURRYING




