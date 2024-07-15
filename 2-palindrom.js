/*// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);*/

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is the same forwards and backwards
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("nurses run")); // Output: true
console.log(isPalindrome("hello")); // Output: false

