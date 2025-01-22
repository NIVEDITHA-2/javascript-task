//number strings

function convertToNumber(inputString) {
    const number = Number(inputString); 
    return isNaN(number) ? NaN : number;
}

console.log(convertToNumber("42"));    
console.log(convertToNumber("3.14"));  
console.log(convertToNumber("abc"));   
console.log(convertToNumber(""));      
console.log(convertToNumber(null));    

//min max
function findMinMax(num1, num2) {
    const smallest = Math.min(num1, num2);
    const largest = Math.max(num1, num2);
    return {
        smallest: smallest,
        largest: largest
    };
}

const result = findMinMax(10, 25);
console.log(`Smallest: ${result.smallest}, Largest: ${result.largest}`);

//finite_value
function checkIfFinite(value) {
    if (Number.isFinite(value)) {
        return `${value} is a finite number.`;
    } else {
        return `${value} is not a finite number.`;
    }
}
console.log(checkIfFinite(42));             
console.log(checkIfFinite(3.14));           
console.log(checkIfFinite("42"));