// If Statements & Comparison Operators

// if(something){
//     do something
// }   else {
//     do something else
// }

// creating a variable named id

const id = 100;

// EQUAL TO
// comparing with ==
if (id == 100){
    console.log('correct');
}   else{
    console.log('incorrect');
}


// NOT EQUAL TO  !=
if (id != 101){
    console.log('correct');
}   else{
    console.log('incorrect');
}


// EQUAL TO VALUE & TYPE  ===
if (id === 100){
    console.log('correct');
}   else{
    console.log('incorrect');
}


// NOT EQUAL TO VALUE & TYPE  !==
if (id !== 100){
    console.log('correct');
}   else{
    console.log('incorrect');
}


// if you want to test if something is undefined/ not there at all 
// test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}   else {
    console.log(`NO ID`);
}

// GREATER OR LESS THAN
if (id > 100){
    console.log('correct');
}   else{
    console.log('incorrect');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
    console.log('color is red');
}   else if (color === 'blue'){
    console.log('color is blue');
}   else {
    console.log('color is not red or blue');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 20;


// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}   else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}   else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in a race`);
}   else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'correct' : 'incorrect');

// WITHOUT BRACES   BUT NOT RECOMMENDED
if(id === 100)
    console.log('correct');
else
    console.log('incorrect');