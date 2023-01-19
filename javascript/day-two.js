// variable in JavaScript
// var, let, const

// let is a modern javascript keyword

// ES6 modern variable is let, so better of using it

let userName = 'hamad';
console.log(userName);

const pi = 3.14;
document.write('<br>');
document.write(pi);

function hello() {
    console.log('Hey Hamad');
}

// object & function inside object

let trait = {
    age: 10,
    name: 'hamad',
    func: function myFunc(number) {
        console.log("The number is " + number);
    }
}
// double click
document.addEventListener("dblclick",function (){
    console.log("You've double clicked");
    let getConfirmation = confirm('are you sure to proceed');
    console.log(getConfirmation);
});
