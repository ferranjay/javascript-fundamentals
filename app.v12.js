// FUNCTION DECLERATIONS

function hi(){
    console.log('hello');
}

hi();

// normally you return something with a function

function greet(firstName = 'john', lastName = 'doe'){
    // console.log('hello');
    return 'hello ' + firstName + ' ' + lastName;
}

console.log(greet());


// FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
};

// console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// a function which you declare and run at the same time
// you have to make it an expression by putting in ()

(function(){
    console.log('IIFE...')
})();

(function(name){
    console.log('hello ' + name);
})('brad');


