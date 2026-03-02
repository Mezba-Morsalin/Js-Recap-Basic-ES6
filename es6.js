// default Value Parameter
function addition (num1, num2 = 5) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
}
addition(10,);

function subtraction (num3, num4) {
    const subs = num3 - num4;
    console.log(num3, num4, subs);
}
subtraction(30,20);
// default Value Parameter
function multiplication (num5, num6 = 0) {
    const multiply = num5 * num6;
    console.log(num5, num6, multiply);
}
multiplication(30);
// default Value Parameter
function fullName (firstName, lastName = 'Khan') {
    const fullName = firstName+ ' Rukh '+ lastName;
    console.log(fullName)
}
fullName('Shah')