// Date and times

//we specify a variable 
let val;

//if we dont pass anything through these variables we get todays date
const today = new Date();
// how to change it to another date
// we can change const to let, so we can redeclare it 
let birthday = new Date('9-10-1981');
birthday = new Date('september 10 1981');
birthday = new Date('9/10/1981');

// variable which we are logging
// if we want to get the month we can do (0 based)
val = today.getMonth();
// if we want to get the date
val = today.getDate();
// if we want to get the day
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);



console.log(birthday);