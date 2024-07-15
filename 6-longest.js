function findLongestWord(str) {
    // Split the string into an array
    const words = str.split(' ');

    // Using reduce to find the longest word
    const longestWord = words.reduce((longest, current) => { return current.length > longest.length ? current : longest; }, '');

    return longestWord;
}

const inputString = 'Web Development Tutorial';
const result = findLongestWord(inputString);
console.log(result); 
