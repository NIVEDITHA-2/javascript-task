function isFutureDate(dateString) {
    const inputDate = new Date(dateString); 
    const currentDate = new Date(); 

    currentDate.setHours(0, 0, 0, 0);

    return inputDate > currentDate;
}
console.log(isFutureDate("2025-02-18"));
console.log(isFutureDate("2023-01-01"));