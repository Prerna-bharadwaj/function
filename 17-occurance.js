function countLetterOccurrences(str) {
    const occurrences = {};
    for (const char of str) {
        const lowerChar = char.toLowerCase();

        
        if (lowerChar >= 'a' && lowerChar <= 'z') {
            occurrences[lowerChar] = (occurrences[lowerChar] || 0) + 1;
        }
    }

    return occurrences;
}

const inputString = "The quick brown fox jumps over the lazy dog";
const result = countLetterOccurrences(inputString);
console.log(result);
