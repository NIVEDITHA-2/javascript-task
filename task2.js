//uppercase string
let a = "hello world"; 
console.log("Input string:", a);

function ToUppercase(a) {
    return a.toUpperCase();
}
let uppercasedString = ToUppercase(a);
console.log("Uppercase:", uppercasedString);


//check the sustring have the match word
function containsJavaScript(inputString) {
    const wordToFind = "javascript";
    const lowerCaseString = inputString.toLowerCase();

    let found = false;
    for (let i = 0; i <= lowerCaseString.length - wordToFind.length; i++) {
        let match = true;
        for (let j = 0; j < wordToFind.length; j++) {
            if (lowerCaseString[i + j] !== wordToFind[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            found = true;
            break;
        }
    }
    return found;
}

const userInput = "I love JavaScript programming!";
if (containsJavaScript(userInput)) {
    console.log("The string contains the word 'javascript'.");
} else {
    console.log("The string does not contain the word 'javascript'.");
}

//return the string without vowels

function removeVowels(b) {
    let vowels = "aeiouAEIOU"; 
    let result = ""; 

    
    for (let i = 0; i < b.length; i++) {
        if (!vowels.includes(b[i])) {
            result += b[i];
        }
    }
    return result; 
}

let b = "Hello World"; 
let stringWithoutVowels = removeVowels(b);
console.log("String without vowels:", stringWithoutVowels);
