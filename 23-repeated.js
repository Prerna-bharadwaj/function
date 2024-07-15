function firstNonRepeatedCharacter(str) {
    const charCount = {};

    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }


    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}


const sampleString = 'abacddbec';
const result = firstNonRepeatedCharacter(sampleString);

console.log(result); 
