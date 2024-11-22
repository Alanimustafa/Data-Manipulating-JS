// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log (isSum50);

// true


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
console.log(`Is ${n1} an odd number? `, n1 %2 == 1); 
console.log(`Is ${n2} an odd number? `, n2 %2 == 1);
console.log(`Is ${n3} an odd number? `, n3 %2 == 1);
console.log(`Is ${n4} an odd number? `, n4 %2 == 1);



// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("Is therer any number over than 25? ", isOver25);


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);






  // Part 1: Math Problems

  // Check if all numbers are divisible by 5. Cache the result in a variable.
  console.log(`Is ${n1} divided by 5?  Answer: `, n1 % 5 === 0);
  console.log(`Is ${n2} divided by 5?  Answer: `, n2 % 5 === 0);
  console.log(`Is ${n3} divided by 5?  Answer: `, n3 % 5 === 0);
  console.log(`Is ${n4} divided by 5?  Answer: `, n4 % 5 === 0);

  //Check if the first number is larger than the last. Cache the result in a variable.
  console.log(`Is ${n1} greater than ${n4}?  Answer: `, n1 > n4);

//Accomplish the following arithmetic chain:

  //Subtract the first number from the second number.
  console.log(`Subtract ${n1} from ${n2}. The Result Is: `, n2-n1);


  //Multiply the result by the third number.
  const nNumbersSum = n1 + n2 + n3 + n4;
  const nNumbersMultiN3 = nNumbersSum * n3;
  console.log(`Multipying The result by ${n3} equals to: `, nNumbersMultiN3 );

  //Find the remainder of dividing the result by the fourth number.
  const resultRemainderN4 = nNumbersMultiN3 % n4;
  console.log(`The Reaminder of Dividing ${nNumbersMultiN3} by ${n4} is: `, resultRemainderN4);