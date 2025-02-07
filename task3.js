//to find the second largest number in array
function findSecondLargest(arr) {
    let largest = null;
    let second_largest = null;

    for (let num of arr) {
        if (largest === null || num > largest) {
            second_largest = largest; 
            largest = num; 
        } else if ((second_largest === null || num > second_largest) && num !== largest) {
            second_largest = num; 
        }
    }
    return second_largest === null ? "second_largest is none" : second_largest;
}


let arr = [12, 35, 1, 10, 34, 1];


let result = findSecondLargest(arr);
console.log("The second_largest number is:", result);


//to check the array is palindrome or not
function isPalindrome(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false; 
        }
    }
    return true;
}

let arr1 = [1, 2, 3, 2, 1]; 
if (isPalindrome(arr1)) {
    console.log("The array is a palindrome.");
} else {
    console.log("The array is not a palindrome.");
}


// Function to filter out negative numbers and push positive numbers to a new array
function filterAndPushPositiveNumbers(arr) {
    const positiveNumbers = arr.filter(num => num >= 0);

    const newArray = [];
    positiveNumbers.forEach(num => newArray.push(num));
    return newArray;
}

const originalArray = [-10, 5, -3, 8, 0, -2, 7];
const resultArray = filterAndPushPositiveNumbers(originalArray);

console.log("Original array:", originalArray);
console.log("Filtered positive numbers:", resultArray);
