function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let longestSubstring = "";
    let currentSubstring = "";

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let charIndex = currentSubstring.indexOf(char);

        if (charIndex === -1) {
            currentSubstring += char;
        } else {
            if (currentSubstring.length > maxLength) {
                maxLength = currentSubstring.length;
                longestSubstring = currentSubstring;
            }
            currentSubstring = currentSubstring.slice(charIndex + 1) + char;
        }
    }

    if (currentSubstring.length > maxLength) {
        maxLength = currentSubstring.length;
        longestSubstring = currentSubstring;
    }

    return longestSubstring;
}

let inputString = "abcabcbb";
console.log("Longest substring without repeating characters:", longestSubstringWithoutRepeatingCharacters(inputString)); 

inputString = "bbbbb";
console.log("Longest substring without repeating characters:", longestSubstringWithoutRepeatingCharacters(inputString)); 

inputString = "pwwkew";

console.log("Longest substring without repeating characters:", longestSubstringWithoutRepeatingCharacters(inputString)); 
