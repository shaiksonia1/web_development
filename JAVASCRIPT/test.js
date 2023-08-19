console.log("sonia")

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;



// function declaration

function sayHello(){
    console.log("Hello");
}
sayHello();

// function expression 
var sayBye =  function(){
    console.log("Bye");
}

sayBye();

// what is the use of arguements()?
// arguements allow us to not to repeat ourselvesand make our functions what we call more extensible  

function sing(song){
    console.log(song);
}

sing("helllllloooo");
sing("hiiii");
sing("byeeeeee")
// as we can see it will help us to write less lines of code

function multiply(a , b){

    (a*b);
}
multiply(5,10);


