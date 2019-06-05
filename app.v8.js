// OBJECT LITERALS

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@hotmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
}

// variable 

let val;

val = person;
//get specific value , select values from an object
val = person.firstName;  // or use 
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();


console.log(val);


const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 27},
    {name: 'Mary', age: 28}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}