// Objectives

//     Get comfortable with loops: for and while.
//     Get comfortable with conditionals: if/else.

// Please work on the following challenges and upload your work when done.

//     Print odds 1-20
//     Using a loop write code that will console.log all of the odd values from 1 up to 20.
//     Decreasing Multiples of 3
//     Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
//     Print the sequence
//     Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
//     Sigma
//     Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
//     Factorial
//     Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.


// 1

for(var i =1; i <= 20; i++){
    if(i % 2 == 1) {
        console.log((i) + " Is odd ")
    }
}

//2
for(var i = 100 ; i >= 0; i--) {
    if(i % 3 == 0){
        console.log(i)
    }
}

//3
var values = [4,2.5,1,-0.5,-2,-3.5];

for(var i = 0; i<values.length; i++){
    console.log(values[i]);
}

//4
var sum = 0 

for(var i = 0; i <= 100; i++) {
    sum = sum + i 
    // console.log(sum)
}
console.log("The total is  "+ sum)


//5
var sum = 1 ;

for( var i =1 ; i <=12; i++) {
    sum = sum * i
}
console.log("The total product is " + sum)