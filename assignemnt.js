"use strict";
/*Develop a program that calculates and prints the sum of the first even
numbers using a for loop. */
// let sum = 0;
// for (let i = 1; i <= 10; i++) 
// {
//   if (i % 2 === 0)
//    {
//     sum += i;
//    }
// }
// // Print the sum of the even numbers
// console.log(sum);
/* Implement a program that uses a for loop to iterate through an array of numbers
and print only the even numbers. */
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < numbers.length; i++) 
// {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }
/* Implement a program that uses a loop to iterate through an array of numbers
and remove all the even numbers from them and just leave the odd ones. */
// var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = numbers.length - 1; i >= 0; i--) 
// {
//     if (numbers[i] % 2 === 0) 
//     {
//       numbers.splice(i, 1);
//     }
//   }
//   console.log(numbers);
/* Write a program that defines a function to calculate the area of a circle.
The function should take the radius as input and return the calculated area. */
// function calculateCircleArea(radius: number): number
//  {
//     var area = Math.PI * radius * radius;
//     return area;
//   }
//   var radius = 10; 
//   var area = calculateCircleArea(radius);
//   console.log(`The area of the circle with radius ${radius} is ${area}`);
/* Write a program that uses a function to find the largest element in an array of numbers. */
function findLargestElement(numbers) {
    var largestElement = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }
    return largestElement;
}
