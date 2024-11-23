function galonCalculator (speed) {
const gallonPrice = 3;
const totalBudget = 175;
let milePerGallon = 0;
let totalGallons = 0;
const tripDistance = 1500;
let budgetCover = Boolean;
let requiredBudget = 0;
let extraAmount = 0;
let tripTimePerMinutes = 0;


// When the speed is 55 MPH.
if (speed === 55) {
  milePerGallon = 30;
  totalGallons = tripDistance / milePerGallon ;
  console.log("");
  console.log (`Gallons of fuel will you need for the entire trip when your speed is ${speed} per hour is `, Math.round(totalGallons), 'Gallons');

  requiredBudget = totalGallons * gallonPrice ;
  extraAmount = requiredBudget - totalBudget;

  if (requiredBudget <= totalBudget) {
    console.log(`Your budget is enogh and you saved $${Math.round(extraAmount)}. `) ;
  } else if (requiredBudget > totalBudget) {
    console.log(`Your budget is NOT enogh and you need $${Math.round(extraAmount)} more for extra gallons. `) ;
  }

  tripTimePerMinutes = ((( tripDistance / speed ))).toFixed(2) ;
  console.log(`Trip time for ${speed} MPH is : ` , tripTimePerMinutes, 'Hours' );
  console.log("");

// When the speed is 60 MPH.
  } if (speed === 60) {
  milePerGallon = 28;
  totalGallons = tripDistance / milePerGallon ;
  console.log (`Gallons of fuel will you need for the entire trip when your speed is ${speed} per hour is `,Math.round(totalGallons), 'Gallons');
  requiredBudget = totalGallons * gallonPrice ;
  extraAmount = requiredBudget - totalBudget;
if (requiredBudget <= totalBudget) {
  console.log(`Your budget is enogh and you saved $${Math.round(extraAmount)}. `) ;
} else if (requiredBudget > totalBudget) {
  console.log(`Your budget is NOT enogh and you need $${Math.round(extraAmount)} more for extra gallons. `) ;
}

tripTimePerMinutes = ((( tripDistance / speed ))).toFixed(2) ;
console.log(`Trip time for ${speed} MPH is : ` , tripTimePerMinutes , 'Hours');
console.log("");



// When the speed is 75 MPH.
} if (speed === 75) {
  milePerGallon = 23;
  totalGallons = tripDistance / milePerGallon ;
  console.log (`Gallons of fuel will you need for the entire trip when your speed is ${speed} per hour is `, Math.round(totalGallons), 'Gallons');
  requiredBudget = totalGallons * gallonPrice ;
  extraAmount = requiredBudget - totalBudget;
if (requiredBudget <= totalBudget) {
  console.log(`Your budget is enogh and you saved $${Math.round(extraAmount)}. `) ;
} else if (requiredBudget > totalBudget) {
  console.log(`Your budget is NOT enogh and you need $${Math.round(extraAmount)} more for extra gallons. `) ;
}

tripTimePerMinutes = ((( tripDistance / speed ))).toFixed(2) ;
console.log(`Trip time for ${speed} MPH is : ` , tripTimePerMinutes, 'Hours');
console.log("");
} 

}

galonCalculator(55);
galonCalculator(60);
galonCalculator(75);