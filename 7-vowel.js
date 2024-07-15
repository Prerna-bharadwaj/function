function countVowels(str) {
   
    const vowel= /[aeiou]/gi;
    
   
    const matches = str.match(vowel);
    return matches ? matches.length : 0;
}

const inputString = 'The quick brown fox';
const result = countVowels(inputString);
console.log(result); 
