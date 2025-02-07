//1.factorial of a number
function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers"; 
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(-3)); 


//2.remove duplicate elements from array
function removeDuplicates(arr) {
    return [...new Set(arr)]; 
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates(["apple", "banana", "apple", "orange"])); 


//3.function to reverse a string with error handling
function reverseString(str) {
    try {
        if (typeof str !== "string") {
            throw new Error("Input must be a string");
        }
        return str.split("").reverse().join(""); 
    } catch (error) {
        return error.message;
    }
}

console.log(reverseString("hello"));  
console.log(reverseString(12345));    

