// 1. String Manipulation Functions
// 1a. Write a function that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
};
console.log(reverseString("Hello"));

// 1b. Create a function that counts the number of characters in a string.

function characterNum(str) {
    return str.length;
};

console.log(characterNum("Hello"));

// 1c. Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentense) {
    return sentense.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
};

console.log(capitalizeWords("how are you"));

// 2. Array Functions
// 2a. Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}

const numbers = [5, 3, 9, 2, 7];

console.log(findMax(numbers));
console.log(findMin(numbers));

// 2b. Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

const arrNumbers = [1, 2, 3, 4, 5];
console.log(sumArray(arrNumbers));

// 2c. Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition);
}

const filterNumbers = [1, 2, 3, 4, 5];
const isEven = num => num % 2 === 0;
console.log(filterArray(filterNumbers, isEven));

// 3. Mathematical Functions:

// 3a. Write a function to calculate the factorial of a given number.

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5));

// 3b. Create a function to check if a number is prime or not.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(9));

// 3c. Implement a function to generate the Fibonacci sequence up to a given number of terms.
function generateFib(numTerms) {
    let sequence = [];
    if (numTerms === 1) {
        sequence.push(0);
    } else if (numTerms >= 2) {
        sequence.push(0, 1);
        for (let i = 2; i < numTerms; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}

console.log(generateFib(15));
