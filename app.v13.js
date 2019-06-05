// GENERAL LOOPS

// FOR LOOP

// use var or let , because you cant use const as it keeps changing
// de construction is as follows
// declaration of a variable , condition , increment of variable 

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        //continue;  means keep going with the loop
    }

if(i === 5){
    break;  // stops at the point when the if statement is mett
}
 console.log('number ' + i);

}


// WHILE LOOP

let i =0;

while(i < 10){
    console.log('number ' + i);
    i++;
}


// DO WHILE 

do {
    console.log('number ' + i);
    i++;
}

while(i < 10);


// LOOP THROUGH ARRAY

const cars = ['ford', 'chevy', 'honda', 'toyota'];
// cars[1];  access arrays 

// see how long the array is 
for(let i = 0; i < cars.length; i++){
    console.log(i);
}

// see what is in the array
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


// FOR EACH
// see whats in the array 
cars.forEach(function(car){
    console.log(car);
});

// see what is in the array with an index 0,1,2,3 etc
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

// one can also access the array
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});



// MAP

const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'jesse'},
    {id: 3, name: 'bob'},
];

//creating an array with the id from the users above
const ids = users.map(function(user){
    return user.id;
})

console.log(ids);



// FOR IN LOOP

const user = {
    firstName: 'john',
    lastName: 'doe',
    age: 40
}

// looping through the object and get the definitions out 
for(let x in user){
    console.log(x);
}

//looping through the object and getting key value pairs
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

