const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-18");

const differenceInTime = date2 - date1;

const differenceInDays = Math.abs(differenceInTime / (1000 * 60 * 60 * 24));

console.log(`The number of days between the dates is: ${differenceInDays}`); 
